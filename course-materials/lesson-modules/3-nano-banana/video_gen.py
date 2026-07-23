"""
MiniMax video generation helper for Claude Code.

The helper creates an asynchronous video task, polls it until completion,
retrieves the generated file, and saves the result in the outputs folder.
"""
import base64
import json
import mimetypes
import os
import time
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urljoin
from urllib.request import Request, urlopen

from dotenv import load_dotenv

load_dotenv()

OUTPUT_DIR = "outputs"
DEFAULT_REGION = "global_en"
DEFAULT_DURATION = 6
DEFAULT_POLL_INTERVAL = 10
DEFAULT_TIMEOUT = 600
VIDEO_GENERATION_PATH = "/v1/video_generation"
VIDEO_QUERY_PATH = "/v1/query/video_generation"
FILE_RETRIEVE_PATH = "/v1/files/retrieve"


@dataclass(frozen=True)
class RegionEndpoints:
    region: str
    openai_base_url: str
    anthropic_base_url: str
    video_base_url: str


_REGION_ENV = {
    "global_en": (
        "MINIMAX_GLOBAL_OPENAI_BASE_URL",
        "MINIMAX_GLOBAL_ANTHROPIC_BASE_URL",
    ),
    "cn_zh": (
        "MINIMAX_CN_OPENAI_BASE_URL",
        "MINIMAX_CN_ANTHROPIC_BASE_URL",
    ),
}


def _required_env(name: str) -> str:
    value = os.environ.get(name, "").strip()
    if not value:
        raise ValueError(f"{name} not found in environment. Check your .env file.")
    return value


def _native_video_base(openai_base_url: str) -> str:
    base_url = openai_base_url.rstrip("/")
    if not base_url.endswith("/v1"):
        raise ValueError("The OpenAI-compatible base URL must end with /v1.")
    return base_url[:-3]


def _region_endpoints(region: str = None) -> RegionEndpoints:
    selected_region = (region or os.environ.get("MINIMAX_REGION", DEFAULT_REGION)).strip()
    if selected_region not in _REGION_ENV:
        supported = ", ".join(_REGION_ENV)
        raise ValueError(f"MINIMAX_REGION must be one of: {supported}")

    openai_env, anthropic_env = _REGION_ENV[selected_region]
    openai_base_url = _required_env(openai_env).rstrip("/")
    anthropic_base_url = _required_env(anthropic_env).rstrip("/")
    if not anthropic_base_url.endswith("/anthropic"):
        raise ValueError("The Anthropic-compatible base URL must end with /anthropic.")

    return RegionEndpoints(
        region=selected_region,
        openai_base_url=openai_base_url,
        anthropic_base_url=anthropic_base_url,
        video_base_url=_native_video_base(openai_base_url),
    )


def _request_json(
    method: str,
    path: str,
    payload: dict = None,
    region: str = None,
    timeout: int = 120,
) -> dict:
    endpoints = _region_endpoints(region)
    api_key = _required_env("MINIMAX_API_KEY")
    body = json.dumps(payload).encode("utf-8") if payload is not None else None
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Accept": "application/json",
    }
    if body is not None:
        headers["Content-Type"] = "application/json"

    request = Request(
        urljoin(f"{endpoints.video_base_url}/", path.lstrip("/")),
        data=body,
        headers=headers,
        method=method,
    )
    try:
        with urlopen(request, timeout=timeout) as response:
            response_body = response.read().decode("utf-8")
    except HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"MiniMax API request failed ({error.code}): {detail}") from error
    except URLError as error:
        raise RuntimeError(f"MiniMax API request failed: {error.reason}") from error

    try:
        return json.loads(response_body)
    except json.JSONDecodeError as error:
        raise RuntimeError("MiniMax API returned invalid JSON.") from error


def _image_reference(value: str) -> str:
    if value.startswith(("http://", "https://", "data:image/")):
        return value

    image_path = Path(value)
    if not image_path.is_file():
        raise FileNotFoundError(f"Reference image not found: {value}")
    if image_path.stat().st_size >= 20 * 1024 * 1024:
        raise ValueError("Reference images must be smaller than 20 MB.")

    mime_type = mimetypes.guess_type(image_path.name)[0] or "image/jpeg"
    if mime_type not in {"image/jpeg", "image/png", "image/webp"}:
        raise ValueError("Reference images must be JPG, JPEG, PNG, or WebP files.")

    encoded = base64.b64encode(image_path.read_bytes()).decode("ascii")
    return f"data:{mime_type};base64,{encoded}"


def create_task(
    prompt: str,
    model: str = None,
    first_frame_image: str = None,
    duration: int = DEFAULT_DURATION,
    resolution: str = None,
    prompt_optimizer: bool = True,
    fast_pretreatment: bool = False,
    callback_url: str = None,
    region: str = None,
) -> dict:
    """Create a text-to-video or image-to-video generation task."""
    if not prompt.strip():
        raise ValueError("prompt must not be empty.")

    selected_model = (model or os.environ.get("MINIMAX_VIDEO_MODEL", "")).strip()
    if not selected_model:
        raise ValueError("Pass model or set MINIMAX_VIDEO_MODEL in your .env file.")

    payload = {
        "model": selected_model,
        "prompt": prompt,
        "duration": duration,
        "prompt_optimizer": prompt_optimizer,
    }
    if first_frame_image:
        payload["first_frame_image"] = _image_reference(first_frame_image)
    if resolution:
        payload["resolution"] = resolution
    if fast_pretreatment:
        payload["fast_pretreatment"] = True
    if callback_url:
        payload["callback_url"] = callback_url

    return _request_json("POST", VIDEO_GENERATION_PATH, payload, region=region)


def query_task(task_id: str, region: str = None) -> dict:
    """Return the current status for a video generation task."""
    query = urlencode({"task_id": task_id})
    return _request_json("GET", f"{VIDEO_QUERY_PATH}?{query}", region=region)


def retrieve_file(file_id: str, region: str = None) -> dict:
    """Retrieve metadata and a temporary download URL for a generated file."""
    query = urlencode({"file_id": file_id})
    return _request_json("GET", f"{FILE_RETRIEVE_PATH}?{query}", region=region)


def download_video(file_id: str, output_path: str = None, region: str = None) -> str:
    """Download a generated video and return its local path."""
    file_response = retrieve_file(file_id, region=region)
    download_url = file_response.get("file", {}).get("download_url")
    if not download_url:
        raise RuntimeError("MiniMax did not return a download URL for the generated video.")

    if output_path:
        destination = Path(output_path)
    else:
        Path(OUTPUT_DIR).mkdir(exist_ok=True)
        destination = Path(OUTPUT_DIR) / f"video_{datetime.now().strftime('%Y%m%d_%H%M%S')}_{file_id}.mp4"
    destination.parent.mkdir(parents=True, exist_ok=True)

    request = Request(download_url, headers={"Accept": "video/mp4"})
    try:
        with urlopen(request, timeout=120) as response:
            destination.write_bytes(response.read())
    except (HTTPError, URLError) as error:
        raise RuntimeError(f"Video download failed: {error}") from error

    print(f"Saved: {destination}")
    return str(destination)


def generate(
    prompt: str,
    model: str = None,
    first_frame_image: str = None,
    duration: int = DEFAULT_DURATION,
    resolution: str = None,
    prompt_optimizer: bool = True,
    fast_pretreatment: bool = False,
    callback_url: str = None,
    region: str = None,
    poll_interval: int = DEFAULT_POLL_INTERVAL,
    timeout: int = DEFAULT_TIMEOUT,
    output_path: str = None,
) -> str:
    """Create, wait for, and download a video generation task."""
    task_response = create_task(
        prompt=prompt,
        model=model,
        first_frame_image=first_frame_image,
        duration=duration,
        resolution=resolution,
        prompt_optimizer=prompt_optimizer,
        fast_pretreatment=fast_pretreatment,
        callback_url=callback_url,
        region=region,
    )
    task_id = task_response.get("task_id")
    if not task_id:
        raise RuntimeError("MiniMax did not return a task_id.")

    print(f"Created video task: {task_id}")
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        status_response = query_task(task_id, region=region)
        status = (status_response.get("status") or "").lower()
        if status == "success":
            file_id = status_response.get("file_id")
            if not file_id:
                raise RuntimeError("MiniMax marked the task successful without a file_id.")
            return download_video(file_id, output_path=output_path, region=region)
        if status in {"fail", "failed"}:
            message = status_response.get("base_resp", {}).get("status_msg", "unknown error")
            raise RuntimeError(f"MiniMax video generation failed: {message}")

        print(f"Task status: {status or 'processing'}")
        time.sleep(poll_interval)

    raise TimeoutError(f"Video generation task timed out after {timeout} seconds.")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Generate a video with the configured MiniMax endpoint.")
    parser.add_argument("prompt")
    parser.add_argument("--model")
    parser.add_argument("--first-frame-image")
    parser.add_argument("--duration", type=int, default=DEFAULT_DURATION)
    parser.add_argument("--resolution")
    parser.add_argument("--region", choices=tuple(_REGION_ENV))
    parser.add_argument("--output-path")
    args = parser.parse_args()

    print(
        generate(
            prompt=args.prompt,
            model=args.model,
            first_frame_image=args.first_frame_image,
            duration=args.duration,
            resolution=args.resolution,
            region=args.region,
            output_path=args.output_path,
        )
    )
