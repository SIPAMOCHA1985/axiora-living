import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, zip, service, budget, message } = await req.json();

    if (!name || !email || !phone || !service || !budget || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Ixora Living <hello@ixoraliving.com>",
      to: "hello@ixoraliving.com",
      replyTo: email,
      subject: `New estimate request — ${service}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #FAF9F6; padding: 40px;">
          <div style="border-bottom: 1px solid #C9A96E; padding-bottom: 24px; margin-bottom: 32px;">
            <h1 style="font-size: 24px; color: #1C1C1C; margin: 0; letter-spacing: 4px;">IXORA LIVING</h1>
            <p style="color: #C9A96E; font-size: 11px; letter-spacing: 3px; margin: 4px 0 0; font-family: Arial, sans-serif; text-transform: uppercase;">New Estimate Request — Orlando, FL</p>
          </div>
          <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #1C1C1C;">
            <tr><td style="padding: 8px 0; color: #6B6B6B; width: 110px;">Name</td><td style="padding: 8px 0; font-weight: 500;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C9A96E;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #C9A96E;">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Zip Code</td><td style="padding: 8px 0;">${zip || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Budget</td><td style="padding: 8px 0; font-weight: 500; color: #C9A96E;">${budget}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #F0EDE6; border-left: 2px solid #C9A96E;">
            <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; color: #1C1C1C; line-height: 1.7;">${message}</p>
          </div>
          <p style="margin-top: 32px; font-family: Arial, sans-serif; font-size: 11px; color: #6B6B6B; text-align: center; letter-spacing: 2px;">IXORALIVING.COM</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
