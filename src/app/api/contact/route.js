import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      role,
      company,
      phone,
      service,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

  await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.MAIL_TO,
  replyTo: email,
  subject: "🚗 New Enquiry - ETRA Automotive",
  html: `
    <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">
      <div style="max-width:640px; margin:auto; background:#ffffff; border-radius:14px; overflow:hidden;">
        
        <div style="background:#050505; padding:28px; text-align:center;">
          <h1 style="color:#ffffff; margin:0; letter-spacing:2px;">
            ETRA Automotive
          </h1>
          <p style="color:#9ca3af; margin-top:8px;">
            New Website Enquiry
          </p>
        </div>

        <div style="padding:30px;">
          <h2 style="margin-top:0; color:#111827;">Contact Details</h2>

          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Role:</strong> ${role || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>

          <hr style="border:none; border-top:1px solid #e5e7eb; margin:26px 0;" />

          <h2 style="color:#111827;">Project Message</h2>
          <p style="line-height:1.7; color:#374151;">
            ${message}
          </p>
        </div>

        <div style="background:#f9fafb; padding:18px; text-align:center; color:#6b7280; font-size:13px;">
          This enquiry was submitted from the ETRA Automotive website.
        </div>

      </div>
    </div>
  `,
});

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}