// Scanner-proof version of /join. GET returns a page that subscribes via
// client-side JS after a short delay (email security scanners either don't
// execute JS or flag themselves via navigator.webdriver). POST performs the
// actual subscribe. See fix-link-scanner-ghost-subs.md in the ops vault.
const PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Claude Code for Everyone</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
         display: flex; align-items: center; justify-content: center;
         min-height: 100vh; margin: 0; background: #faf9f5; color: #1a1a1a; }
  .card { text-align: center; padding: 2rem; }
  h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
  p { color: #666; }
</style>
</head>
<body>
<div class="card">
  <h1>You're in! 🎉</h1>
  <p>Taking you to the course&hellip;</p>
  <noscript><p><a href="https://ccforeveryone.com">Click here to continue</a></p></noscript>
</div>
<script>
(function () {
  var go = function () { window.location.replace("https://ccforeveryone.com"); };
  var email = "";
  try { email = new URLSearchParams(window.location.search).get("email") || ""; } catch (e) {}
  if (!email || email.indexOf("@") === -1 || navigator.webdriver) { go(); return; }
  setTimeout(function () {
    var finished = false;
    var finish = function () { if (!finished) { finished = true; go(); } };
    fetch("/api/join2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email })
    }).then(finish, finish);
    setTimeout(finish, 4000);
  }, 1500);
})();
</script>
</body>
</html>`;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = (req.body && req.body.email) || "";
    if (!email || !email.includes("@")) {
      return res.status(400).json({ ok: false });
    }
    try {
      const upstream = await fetch("https://fullstackpm.com/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          publication: "cc4e",
          source: "smartlead-cold-email",
          utm_source: "smartlead",
          utm_medium: "email",
          utm_campaign: "cold-outreach",
          tags: ["cold-email", "join2"],
          fspm_utm_medium: "cold-outreach",
        }),
      });
      if (!upstream.ok) {
        const detail = await upstream.text().catch(() => "");
        console.error("Subscribe upstream error:", upstream.status, detail);
        return res.status(502).json({ ok: false, upstream: upstream.status });
      }
    } catch (err) {
      console.error("Subscribe error:", err);
      return res.status(500).json({ ok: false });
    }
    return res.status(200).json({ ok: true });
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).send(PAGE);
}
