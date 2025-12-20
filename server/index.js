// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Timeline Improvements API is running");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, city, details } = req.body || {};

  if (!name || !email || !details) {
    return res.status(400).json({
      error: "Name, email and project details are required.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"Timeline Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toEmail,
      subject: "New project enquiry from website",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
City: ${city || "-"}
-------------------------
Details:
${details}
      `.trim(),
      html: `
        <h2>New project enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>City:</strong> ${city || "-"}</p>
        <p><strong>Details:</strong></p>
        <p>${details.replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    res.status(500).json({
      error: "Failed to send email. Please check server logs / SMTP settings.",
    });
  }
});

app.listen(PORT, () =>
  console.log(`API listening on http://localhost:${PORT}`)
);
