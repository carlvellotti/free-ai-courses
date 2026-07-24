# Test Commands

> **Superseded (2026-07):** The course is now delivered by the FSPM CLI, not GitHub release zips. Test the current flow below. The old zip flow is kept at the bottom until the release assets are retired.

## Test the FSPM Flow

The student paste prompt lives in one place: the `COURSE_PROMPT` constant in `website/components/CopyPrompt.jsx`. Use that exact string below.

**Claude Desktop app:** start a new project and paste the student prompt.

**Claude Code CLI:** run the same prompt from a scratch folder:

```bash
mkdir -p ~/Documents/fspm-test && cd ~/Documents/fspm-test && claude
```

(then paste the student prompt)

## Test Slash Commands

Once the course is installed, test these:

```
/start-1-1
```

```
/start-3-1-1
```

```
/start-3-2-1
```

## Cleanup

```bash
cd ~/Documents && rm -rf fspm-test
```

---

## Legacy: ZIP Release Flow (retired)

```bash
cd ~/Documents && \
curl -L https://github.com/carlvellotti/claude-code-pm-course/releases/download/nano-banana-test-v1/complete-course.zip -o test-course.zip && \
unzip test-course.zip -d test-course && \
cd test-course && \
claude
```

Cleanup:

```bash
cd ~/Documents && rm -rf test-course test-course.zip
```
