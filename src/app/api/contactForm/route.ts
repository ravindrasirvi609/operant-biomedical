import FormData from "form-data";
import Mailgun from "mailgun.js";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function POST(req: NextRequest) {
  console.log("Data", req.body);

  const mailgun = new Mailgun(FormData);
  console.log("Mailgun", mailgun);

  const client = mailgun.client({ username: "api", key: API_KEY });
  console.log("Client", client);

  const { name, email, message } = await req.json();

  const messageData = {
    from: "Contact Form <admin@opf.org.in>",
    to: "ravi.sirvi609@gmail.com",
    subject: "New Contact Form!",
    text: `Hello,

    You have a new form entry from: ${name} ${email}.

    ${message}
    `,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  return NextResponse.json({ submitted: true });
}
