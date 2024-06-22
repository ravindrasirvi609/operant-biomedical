import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import RazorpayTransaction from "@/models/transactionModel";
import Membership from "@/models/membershipModel";
import { Resend } from "resend";
connect();

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    const { orderId } = requestBody;

    const transactionData = await RazorpayTransaction.findOne({
      orderId,
    }).exec();

    const transactionId = transactionData.paymentId;
    const transactionDate = transactionData.createdAt.toString();
    const transactionAmount = transactionData.amount;

    // Validate request body and order ID
    if (!requestBody || !requestBody.orderId) {
      return NextResponse.json(
        { message: "Invalid request body. Missing order ID." },
        { status: 400 }
      );
    }

    // Attach the PDF to the email
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Resend API key not found");
    }

    const userData = await Membership.findOne({
      email: transactionData.user,
    });
    console.log("userData", userData);
    if (!userData) {
      throw new Error("User data not found");
    }

    const resend = new Resend(apiKey);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Operant Biomedical Research Federation <noreply@ravindrachoudhary.in>",
        to: userData.email,
        subject: `Congratulations! You're Now a Premium Member`,
        html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; color: #333; background-color: #f9f9f9; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; position: relative;">
  <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('https://opf.org.in/wp-content/uploads/2023/01/OPF_Logo.png') no-repeat center center; background-size: 200px; opacity: 0.1; pointer-events: none;"></div>
  <h1 style="font-size: 24px; color: #154c8c; text-align: center; margin-bottom: 20px; z-index: 1; position: relative;">Congratulations!</h1>
  <p style="font-size: 18px; z-index: 1; position: relative;">Dear ${userData.name},</p>
  <p style="font-size: 18px; z-index: 1; position: relative;">Welcome to Operant Biomedical Research Federation</p>
  <p style="font-size: 18px; z-index: 1; position: relative;">We are thrilled to inform you that your transaction was successful, and you are now a premium member!</p>
  <div style="margin-top: 20px; z-index: 1; position: relative;">
    <p style="font-size: 18px;"><strong>Transaction Details:</strong></p>
    <ul style="font-size: 18px; padding-left: 20px; list-style-type: none; padding: 0;">
      <li><strong>Transaction ID:</strong> ${transactionData.paymentId}</li>
      <li><strong>Date:</strong> ${transactionDate}</li>
      <li><strong>Amount:</strong> ${transactionAmount}</li>
    </ul>
  </div>
  <div style="margin-top: 20px; z-index: 1; position: relative;">
    <p style="font-size: 18px;"><strong>Your Premium Plan:</strong></p>
    <ul style="font-size: 18px; padding-left: 20px; list-style-type: none; padding: 0;">
      <li><strong>Plan:</strong> Premium Membership</li>
      <li><strong>Membership ID:</strong> ${userData.membershipId}</li>
      <li><strong>Benefits:</strong></li>
      <ul style="font-size: 18px; padding-left: 20px; list-style-type: disc;">
        <li>Access to exclusive content</li>
        <li>Priority customer support</li>
        <li>Advanced features</li>
        <li>Discounts on future purchases</li>
      </ul>
    </ul>
  </div>
  <p style="font-size: 18px; margin-top: 20px; z-index: 1; position: relative;">We are excited to have you as a premium member! If you have any questions or need assistance, feel free to contact us at <a href="mailto:admin@opf.org.in" style="color: #154c8c; text-decoration: none;">admin@opf.org.in</a></p>
  <p style="font-size: 18px; margin-top: 20px; z-index: 1; position: relative;">Best regards,</p>
  <p style="font-size: 18px; font-weight: bold; z-index: 1; position: relative;">Operant Bio Medical Research Federation</p>
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
    p, ul {
      font-size: 16px;
    }
    ul ul {
      padding-left: 15px;
    }
  }
</style>


    `,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.error("Error sending email:", res.status);
    }

    return new NextResponse(
      "Invoice sent successfully. Please check your email.",
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("Error generating invoice PDF:", err);
    return new NextResponse(
      "An error occurred while generating the invoice. Please try again.",
      {
        status: 500,
      }
    );
  }
}
