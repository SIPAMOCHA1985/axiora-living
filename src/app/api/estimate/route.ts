import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const {
      name,
      email,
      phone,
      zip,
      propertyType,
      services,
      squareFootage,
      timeline,
      style,
      budget,
      hearAbout,
      message,
    } = await req.json();

    if (!name || !email || !phone || !services?.length || !budget) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const serviceList = Array.isArray(services) ? services.join(", ") : services;

    await resend.emails.send({
      from: "Ixora Living <Info@ixora-living.com>",
      to: "Info@ixora-living.com",
      replyTo: email,
      subject: `New Estimate Request — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 640px; margin: 0 auto; background: #FAF9F6; padding: 48px;">
          <div style="border-bottom: 1px solid #C9A96E; padding-bottom: 28px; margin-bottom: 36px;">
            <h1 style="font-size: 26px; color: #1C1C1C; margin: 0; letter-spacing: 5px; font-weight: 500;">IXORA LIVING</h1>
            <p style="color: #C9A96E; font-size: 11px; letter-spacing: 4px; margin: 6px 0 0; font-family: Arial, sans-serif; text-transform: uppercase;">Detailed Estimate Request — Orange County, FL</p>
          </div>

          <h2 style="font-family: Georgia, serif; font-size: 18px; color: #1C1C1C; margin: 0 0 24px; font-weight: 500;">Client Information</h2>
          <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #1C1C1C; margin-bottom: 32px;">
            <tr><td style="padding: 8px 0; color: #6B6B6B; width: 150px;">Name</td><td style="padding: 8px 0; font-weight: 500;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C9A96E; text-decoration: none;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #C9A96E; text-decoration: none;">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Zip Code</td><td style="padding: 8px 0;">${zip || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Property Type</td><td style="padding: 8px 0;">${propertyType || "—"}</td></tr>
          </table>

          <h2 style="font-family: Georgia, serif; font-size: 18px; color: #1C1C1C; margin: 0 0 24px; font-weight: 500; border-top: 1px solid #E2DDD5; padding-top: 28px;">Project Details</h2>
          <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; color: #1C1C1C; margin-bottom: 32px;">
            <tr><td style="padding: 8px 0; color: #6B6B6B; width: 150px;">Services</td><td style="padding: 8px 0; font-weight: 500; color: #C9A96E;">${serviceList}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Square Footage</td><td style="padding: 8px 0;">${squareFootage || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Timeline</td><td style="padding: 8px 0;">${timeline || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Design Style</td><td style="padding: 8px 0;">${style || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Budget</td><td style="padding: 8px 0; font-weight: 500; color: #C9A96E;">${budget}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B6B;">Referred By</td><td style="padding: 8px 0;">${hearAbout || "—"}</td></tr>
          </table>

          ${
            message
              ? `<div style="margin-top: 8px; padding: 24px; background: #F0EDE6; border-left: 3px solid #C9A96E;">
              <p style="margin: 0 0 8px; font-family: Arial, sans-serif; font-size: 11px; color: #C9A96E; letter-spacing: 3px; text-transform: uppercase;">Project Notes</p>
              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; color: #1C1C1C; line-height: 1.8;">${message}</p>
            </div>`
              : ""
          }

          <p style="margin-top: 40px; font-family: Arial, sans-serif; font-size: 11px; color: #6B6B6B; text-align: center; letter-spacing: 3px; text-transform: uppercase;">IXORALIVING.COM · (407) 538-8810</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Estimate form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
