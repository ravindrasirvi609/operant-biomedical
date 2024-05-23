import emailModel from "@/models/subscribeEmailModel";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  console.log("email", email);

  try {
    // Save email in database
    const response = await new emailModel({ email }).save();
    console.log("response", response);

    // Send email
    const apiKey = process.env.RESEND_API_KEY!;
    const resend = new Resend(apiKey);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Newsletter <noreply@ravindrachoudhary.in>",
        to: `${email}`,
        subject: "Thank You for Subscribing!",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #f4f4f4; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
            <h1 style="font-size: 24px; color: #333; text-align: center; margin-bottom: 20px;">Thank You for Subscribing!</h1>
            <p style="font-size: 18px;">Hi there,</p>
            <p style="font-size: 18px;">Thank you for subscribing to our newsletter. We're excited to have you with us.</p>
            <p style="font-size: 18px;">You'll now be the first to know about our latest updates, research breakthroughs, and upcoming events.</p>
            <p style="font-size: 18px;">If you have any questions or feedback, feel free to reach out to us at any time.</p>
            <p style="font-size: 18px;">Best regards,</p>
            <p style="font-size: 18px;">Operant Biomedical Research Federation</p>
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
            }
          </style>
        `,
      }),
    });

    console.log("emailRes", res);
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json(
      { submitted: false, error: err.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ submitted: true });
}
