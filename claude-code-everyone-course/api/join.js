export default async function handler(req, res) {
  const { email } = req.query;

  if (!email || !email.includes("@")) {
    return res.redirect(302, "https://ccforeveryone.com");
  }

  try {
    await fetch("https://fullstackpm.com/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        publication: "cc4e",
        source: "smartlead-cold-email",
        utm_source: "smartlead",
        utm_medium: "email",
        utm_campaign: "cold-outreach",
        tags: ["cold-email"],
        fspm_utm_medium: "cold-outreach",
      }),
    });
  } catch (err) {
    console.error("Subscribe error:", err);
  }

  return res.redirect(302, "https://ccforeveryone.com");
}
