import ContactModel from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email, message, subject, phone } = await req.json();
  const esponse = await new ContactModel({
    name,
    email,
    message,
    subject,
    phone,
  }).save();
  console.log("esponse", esponse);
  const apiKey = process.env.RESEND_API_KEY!;
  const resend = new Resend(apiKey);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "Contact Form <noreply@ravindrachoudhary.in>",
      to: "admin@opf.org.in",
      subject: `${name} wants to connect with you!`,
      html: `
     <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #A8F387; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
      <h1 style="font-size: 24px; color: #333; text-align: center; margin-bottom: 20px;">Contact Form</h1>
      <p style="font-size: 18px;">Hi there,</p>
      <p style="font-size: 18px;">
        <strong>${name}</strong> wants to connect with you!
      </p>
      <div style="margin-top: 20px;">
        <p style="font-size: 18px;"><strong>Details:</strong></p>
        <ul style="font-size: 18px; padding-left: 20px;">
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${message}</li>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
      </div>
    </div>
    <style>
      @media only screen and (max-width: 600px) {
        div {
          padding: 15px;
          font-size: 16px;
        }
        h1 {
          font-size: 22px;
        }
        p {
          font-size: 16px;
        }
        ul {
          font-size: 16px;
        }
      }
    </style>
    `,
    }),
  });

  try {
    console.log("emailRes", res);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  return NextResponse.json({ submitted: true });
}
