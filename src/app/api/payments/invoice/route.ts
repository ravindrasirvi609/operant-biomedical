import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { connect } from "@/dbConfig/dbConfig";
import RazorpayTransaction from "@/models/transactionModel";
import Membership from "@/models/membershipModel";
import membershipPlan from "@/models/membershipPlanModel";
import { Resend } from "resend";
connect();

async function generateInvoiceHtml(orderId: string): Promise<string> {
  try {
    const transactionData = await RazorpayTransaction.findOne({
      orderId,
    }).exec();

    console.log(transactionData);

    const userData = await Membership.findOne({
      email: transactionData.user,
    });
    console.log(userData);
    if (!userData) {
      throw new Error(`No user data found for email ${transactionData.user}`);
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Resend API key not found");
    }

    const planDetails = await membershipPlan.findById(transactionData.plan);
    console.log(planDetails);
    if (!planDetails) {
      throw new Error(
        `No plan details found for plan ID ${transactionData.plan}`
      );
    }

    const invoiceHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Confirmation</title>
    <style>
        .invoice, .header, .client, .items-list, .footer {
            font-family: 'Manrope', sans-serif;
            color: #333;
        }
        .invoice {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            border: 1px dashed #9747ff;
            border-radius: 5px;
            padding: 20px;
            box-sizing: border-box;
        }
        .header, .client, .items-list, .footer {
            margin-bottom: 20px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
        }
        .subject, .invoice-details, .contact, .total-due, .items-list {
            margin-top: 10px;
        }
        .subject p, .invoice-details div, .contact div, .total-due div {
            margin: 5px 0;
        }
        .sender, .invoice-details, .contact, .items-list {
            width: 100%;
        }
        .items-list .item {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            padding: 10px 0;
        }
        .footer {
            display: flex;
            justify-content: space-between;
        }
    </style>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap">
</head>
<body>
    <div class="invoice">
        <!-- Header Section -->
        <div class="header">
            <div class="sender">
                <div class="title">Payment Confirmation</div>
                <div class="subject">
                    <p><strong>From:</strong></p>
                    <p>Operant Biomedical Research Federation</p>
                    <p>Pali, Rajasthan</p>
                </div>
            </div>
            <div class="invoice-details">
                <div>
                    <strong>Membership ID:</strong> ${userData.membershipId}
                </div>
                <div>
                    <strong>Payment ID:</strong> ${transactionData.paymentId}
                </div>
                <div>
                    <strong>Payment Date:</strong> ${transactionData.createdAt.toString()}
                </div>
            </div>
        </div>
        
        <!-- Client Section -->
        <div class="client">
            <div class="contact">
                <div><strong>Bill To:</strong></div>
                <div>${userData.title} ${userData.name}</div>
                <div>Address: ${userData.address}, City: ${
      userData.city
    }, State: ${userData.state}, Pincode: ${userData.postalCode}</div>
                <div>Phone: ${userData.phone}, Email: ${userData.email}</div>
            </div>
            <div class="total-due">
                <div><strong>Total Amount:</strong></div>
                <div>${transactionData.amount}</div>
            </div>
        </div>
        
        <!-- Items List Section -->
        <div class="items-list">
            <div class="item">
                <div>
                    <strong>Deliverables:</strong> ${planDetails.title}
                    <p class="description">${planDetails.description}</p>
                </div>
                <div>
                    <strong>Quantity:</strong> 1
                </div>
                <div>
                    <strong>Charges:</strong> ${transactionData.amount}
                </div>
            </div>
        </div>
        
        <!-- Footer Section -->
        <div class="footer">
            <div class="contact">
                <div><strong>Contact:</strong></div>
                <div>Phone: +91-94609-71652</div>
                <div>Email: admin@opf.org.in</div>
            </div>
            <div class="total-due">
                <div><strong>Thank you for your payment!</strong></div>
                <div>Operant Biomedical Research Federation</div>
            </div>
        </div>
    </div>
</body>
</html>

    `;
    return invoiceHtml;
  } catch (error) {
    console.error("Error generating invoice HTML:", error);
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    // Extract order ID from the request body
    const requestBody = await req.json();
    const { orderId } = requestBody;

    // Fetch the transaction data from the database
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

    // Generate the invoice HTML using transaction data
    const invoiceHtml = await generateInvoiceHtml(orderId);

    // Generate the invoice PDF using Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setContent(invoiceHtml);
    const pdfBuffer = await page.pdf();
    await browser.close();

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
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #f9f9f9; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="font-size: 24px; color: #333; text-align: center; margin-bottom: 20px;">Congratulations!</h1>
        <p style="font-size: 18px;">Dear ${userData.name},</p>
                <p style="font-size: 18px;">Welcome to Operant Biomedical Research Federation</p>

        <p style="font-size: 18px;">We are thrilled to inform you that your transaction was successful, and you are now a premium member!</p>

        <div style="margin-top: 20px;">
          <p style="font-size: 18px;"><strong>Transaction Details:</strong></p>
          <ul style="font-size: 18px; padding-left: 20px;">
            <li><strong>Transaction ID:</strong> ${transactionData.paymentId}</li>
            <li><strong>Date:</strong> ${transactionDate}</li>
            <li><strong>Amount:</strong> ${transactionAmount}</li>
          </ul>
        </div>

        <div style="margin-top: 20px;">
          <p style="font-size: 18px;"><strong>Your Premium Plan:</strong></p>
          <ul style="font-size: 18px; padding-left: 20px;">
            <li><strong>Plan:</strong> Premium Membership</li>
            <li><strong>Membership ID:</strong> ${userData.membershipId}</li>
            <li><strong>Benefits:</strong></li>
            <ul style="font-size: 18px; padding-left: 20px;">
              <li>Access to exclusive content</li>
              <li>Priority customer support</li>
              <li>Advanced features</li>
              <li>Discounts on future purchases</li>
            </ul>
          </ul>
        </div>

        <p style="font-size: 18px; margin-top: 20px;">We are excited to have you as a premium member! If you have any questions or need assistance, feel free to contact us at admin@opf.org.in</p>

        <p style="font-size: 18px; margin-top: 20px;">Best regards,</p>
        <p style="font-size: 18px; font-weight: bold;">Operant Bio Medical Research Federation</p>
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
        attachments: [
          {
            filename: `invoice_${orderId}.pdf`,
            content: pdfBuffer.toString("base64"),
            type: "application/pdf",
            disposition: "attachment",
          },
        ],
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.error("Error sending email:", res.status);
    }

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename="invoice_${orderId}.pdf"`,
        "Content-Type": "application/pdf",
      },
    });
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
