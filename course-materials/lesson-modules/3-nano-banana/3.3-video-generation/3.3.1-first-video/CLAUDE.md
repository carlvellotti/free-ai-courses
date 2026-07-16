# Module 3.3.1: Video Generation

Welcome to Module 3.3.1: Video Generation!

You've already learned how to make strong product visuals. Now you'll turn a product idea or a still image into a short video that can be reviewed, iterated, and shared.

STOP: Ready to create your first product video?

USER: Yes / Ready

---

## Configure the Video Tool

The video helper is `video_gen.py`. It uses the same workflow as the image helper: you describe the creative goal, Claude calls the helper, and the result is saved in `outputs/`.

Before the first generation, make sure the `.env` file in this module's parent folder contains:

```bash
MINIMAX_API_KEY=your_api_key_here
MINIMAX_REGION=global_en
MINIMAX_VIDEO_MODEL=your_video_model_here
```

Use `MINIMAX_REGION=cn_zh` when the domestic endpoint is the right choice for your account. The helper keeps both region configurations available and uses the selected region for task creation, status polling, and file retrieval.

STOP: Is your API key, region, and video model configured?

USER: Yes / Configured

---

## Text-to-Video

Video generation is asynchronous. The helper creates a task, checks its status, retrieves the completed file, and saves the `.mp4` output for you.

STOP: Ask me to create a six-second product demo for TaskFlow Mobile. Describe the product, the user action, the camera movement, and the mood.

USER: Create a product demo / Generate the video

ACTION: Use `video_gen.py` to call `generate()` with:
- The user's prompt
- The configured `MINIMAX_VIDEO_MODEL`
- `duration=6`
- `resolution="768P"` unless the user requests another supported value
- The configured `MINIMAX_REGION`
- An output path inside the `outputs/` folder

ACTION: Tell the user the absolute path to the saved `.mp4` file.

Open the output in a video player and watch for three things: does the subject stay clear, does the motion support the product story, and does the ending leave room for a useful next action?

STOP: What would you change in the first version?

USER: [Describes a change]

ACTION: Generate another version with the requested prompt change. Keep the same product goal unless the user asks for a new direction.

ACTION: Provide the absolute path to the new output.

---

## Image-to-Video

A strong still image can be the first frame of a video. This is useful when you already have a persona, mockup, launch graphic, or storyboard frame that should become a moving scene.

STOP: Ask me to animate an existing product visual. Include the path to an image in this module or another accessible folder.

USER: Animate this image / Turn this still into a video

ACTION: Call `generate()` with:
- `first_frame_image` set to the user's image path
- A prompt describing the motion and camera behavior
- The configured model, region, duration, and resolution

ACTION: If the image is not available or does not meet the API's image requirements, explain the problem and ask for a supported JPG, JPEG, PNG, or WebP image smaller than 20 MB.

ACTION: Provide the absolute path to the generated video.

STOP: Does the motion preserve the original product or character clearly?

USER: Yes / It needs changes

ACTION: If changes are requested, revise only the motion, timing, or camera direction that the user named and generate another version.

---

## A Practical PM Video Workflow

For real product work, use this sequence:

1. **Storyboard:** Write the start state, key action, and end state before generating.
2. **Draft:** Use a short duration and a lower resolution to test the idea quickly.
3. **Review:** Check continuity, motion, framing, and whether the product value is obvious without narration.
4. **Iterate:** Change one creative variable at a time.
5. **Share:** Keep the strongest `.mp4` with a descriptive filename in `outputs/`.

Video prompts work best when they name the subject, action, setting, camera behavior, lighting, duration, and intended audience. Avoid asking for a whole storyboard in one prompt when a sequence of short clips will be easier to review.

STOP: What product moment would you prototype with a short video?

USER: [Responds]

ACTION: Help the user turn that moment into a concise prompt and generate the clip if they are ready.

---

## Wrap-Up

You now have a repeatable video workflow:

- Configure a region and model without changing the helper code
- Generate from text or a reference image
- Wait for asynchronous completion automatically
- Review and iterate on the saved `.mp4`
- Keep the best product story in an organized output folder

The next module is Module 4.1, where you'll use Claude Code to set up a small product website.

Type `/start-4-1` when you're ready to continue.

---

## Important Notes for Claude

- Import `generate()` from `video_gen.py`; do not reimplement API calls in the teaching flow.
- Pass the configured model explicitly when the user has set `MINIMAX_VIDEO_MODEL`.
- Use the selected region for every create, query, and download request.
- Always provide the absolute output path after a successful generation.
- Do not claim a video was generated when the API call or polling step failed.

## Success Criteria

The module is complete when the student has:
- [ ] Configured the video API key, region, and model
- [ ] Generated a text-to-video product clip
- [ ] Iterated on the clip after reviewing it
- [ ] Understands how to animate a reference image
- [ ] Knows where the generated `.mp4` files are saved
