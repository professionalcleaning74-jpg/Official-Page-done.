export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, city, service, size, date, message } = req.body || {};

  if (!email || !name) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const dc = apiKey.split("-")[1];

  const mcRes = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name.split(" ")[0] || name,
        LNAME: name.split(" ").slice(1).join(" ") || "",
        PHONE: phone || "",
        CITY: city || "",
        SERVICE: service || "",
      },
      tags: ["quote-request"],
    }),
  });

  const mcData = await mcRes.json();

  if (!mcRes.ok && mcData.title !== "Member Exists") {
    console.error("Mailchimp error:", mcData);
    return res.status(500).json({ error: "Failed to subscribe to mailing list." });
  }

  return res.status(200).json({ success: true });
}
