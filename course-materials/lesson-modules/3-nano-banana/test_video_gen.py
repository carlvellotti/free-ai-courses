import json
import os
import sys
import tempfile
import threading
import unittest
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from unittest.mock import patch
from urllib.parse import parse_qs, urlparse

sys.path.insert(0, str(Path(__file__).parent))
import video_gen


class CaptureHandler(BaseHTTPRequestHandler):
    requests = []

    def _write_json(self, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length)
        self.requests.append((self.command, self.path, json.loads(body)))
        self._write_json({"task_id": "task-123"})

    def do_GET(self):
        parsed = urlparse(self.path)
        self.requests.append((self.command, self.path, None))
        query = parse_qs(parsed.query)
        if parsed.path == "/v1/query/video_generation":
            self._write_json({"task_id": query["task_id"][0], "status": "Success", "file_id": "file-123"})
        elif parsed.path == "/v1/files/retrieve":
            host, port = self.server.server_address
            self._write_json({"file": {"download_url": f"http://{host}:{port}/video.mp4"}})
        elif parsed.path == "/video.mp4":
            body = b"video-bytes"
            self.send_response(200)
            self.send_header("Content-Type", "video/mp4")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_error(404)

    def log_message(self, *_args):
        return


class VideoGenerationTest(unittest.TestCase):
    def test_generate_captures_native_video_paths(self):
        CaptureHandler.requests = []
        server = ThreadingHTTPServer(("127.0.0.1", 0), CaptureHandler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        host, port = server.server_address
        base_url = f"http://{host}:{port}"

        try:
            with tempfile.TemporaryDirectory() as temp_dir, patch.dict(
                os.environ,
                {
                    "MINIMAX_API_KEY": "test-key",
                    "MINIMAX_REGION": "global_en",
                    "MINIMAX_VIDEO_MODEL": "test-video-model",
                    "MINIMAX_GLOBAL_OPENAI_BASE_URL": f"{base_url}/v1",
                    "MINIMAX_GLOBAL_ANTHROPIC_BASE_URL": f"{base_url}/anthropic",
                    "MINIMAX_CN_OPENAI_BASE_URL": f"{base_url}/v1",
                    "MINIMAX_CN_ANTHROPIC_BASE_URL": f"{base_url}/anthropic",
                },
            ):
                cn_endpoints = video_gen._region_endpoints("cn_zh")
                self.assertEqual(cn_endpoints.anthropic_base_url, f"{base_url}/anthropic")
                output_path = Path(temp_dir) / "result.mp4"
                result = video_gen.generate("A product demo", poll_interval=0, timeout=2, output_path=str(output_path))
                result_bytes = output_path.read_bytes()
        finally:
            server.shutdown()
            server.server_close()
            thread.join(timeout=2)

        self.assertEqual(result, str(output_path))
        self.assertEqual(result_bytes, b"video-bytes")
        paths = [request[1] for request in CaptureHandler.requests]
        self.assertEqual(paths[0], "/v1/video_generation")
        self.assertTrue(paths[1].startswith("/v1/query/video_generation?task_id=task-123"))
        self.assertTrue(paths[2].startswith("/v1/files/retrieve?file_id=file-123"))


if __name__ == "__main__":
    unittest.main()
