import nodemailer from "nodemailer";
import { CONTACT_RECIPIENT, OFFICIAL_CONTACT } from "@/constants/contact";
import { hasSmtpConfig } from "@/lib/server/env";

type InquiryEmail = {
  name: string;
  businessName?: string;
  phone: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendInquiryEmail(inquiry: InquiryEmail) {
  if (!hasSmtpConfig()) {
    return {
      status: "skipped" as const,
      error: "Email delivery is not configured. Add SMTP environment variables."
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const subject = "New Project Inquiry - Magadh Digital";
  const safe = {
    name: escapeHtml(inquiry.name),
    businessName: escapeHtml(inquiry.businessName || "Not provided"),
    phone: escapeHtml(inquiry.phone),
    email: escapeHtml(inquiry.email),
    projectType: escapeHtml(inquiry.projectType),
    budget: escapeHtml(inquiry.budget || "Not provided"),
    message: escapeHtml(inquiry.message)
  };
  const html = `
    <div style="font-family:Arial,sans-serif;background:#050505;color:#f8fafc;padding:24px">
      <div style="max-width:640px;margin:auto;border:1px solid rgba(255,255,255,.14);border-radius:20px;padding:24px;background:#111">
        <h1 style="margin:0 0 16px;color:#ff5a1f">New Project Inquiry - Magadh Digital</h1>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Business:</strong> ${safe.businessName}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Project type:</strong> ${safe.projectType}</p>
        <p><strong>Budget:</strong> ${safe.budget}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;line-height:1.6">${safe.message}</p>
        <hr style="border-color:rgba(255,255,255,.12)" />
        <p style="font-size:12px;color:#9ca3af">Sent from ${OFFICIAL_CONTACT.email}</p>
      </div>
    </div>
  `;
  const text = [
    "New Project Inquiry - Magadh Digital",
    "",
    `Name: ${inquiry.name}`,
    `Business: ${inquiry.businessName || "Not provided"}`,
    `Phone: ${inquiry.phone}`,
    `Email: ${inquiry.email}`,
    `Project Type: ${inquiry.projectType}`,
    `Budget: ${inquiry.budget || "Not provided"}`,
    "",
    "Message:",
    inquiry.message
  ].join("\n");

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: CONTACT_RECIPIENT,
      replyTo: inquiry.email,
      subject,
      html,
      text
    });

    return { status: "sent" as const, error: null };
  } catch (error) {
    return {
      status: "failed" as const,
      error: error instanceof Error ? error.message : "Unknown mail error"
    };
  }
}
