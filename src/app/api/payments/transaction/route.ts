import { connect } from "@/dbConfig/dbConfig";
import RazorpayTransaction from "@/models/transactionModel";
import { NextRequest, NextResponse } from "next/server";
import Membership from "@/models/membershipModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    if (!requestBody) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const {
      orderId,
      paymentId,
      signature,
      amount,
      currency,
      status,
      plan,
      membership,
      user,
    } = requestBody;

    if (!orderId || !paymentId || !signature || !amount || !currency) {
      return NextResponse.json(
        { message: "Invalid request body. Missing required fields" },
        { status: 400 }
      );
    }

    const Amount = amount / 100;

    const razorpayTransaction = new RazorpayTransaction({
      orderId,
      paymentId,
      signature,
      amount: Amount,
      currency,
      status,
      membership,
      plan,
      user,
    });

    const membershipId = await generateMembershipNumber();

    const membershipPlan = await Membership.findOneAndUpdate(
      { email: user },
      { isValidMember: true },
      { membershipId: membershipId }
    );
    await razorpayTransaction.save();

    return NextResponse.json(
      {
        message: "Razorpay transaction saved successfully",
        transaction: razorpayTransaction.toObject(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
async function generateMembershipNumber() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  const lastMembership = await Membership.findOne({ isValidMember: true }).sort(
    { createdAt: -1 }
  );
  const sequenceNumber = lastMembership
    ? parseInt(lastMembership.membershipId.slice(-4)) + 1
    : 1;
  const sequenceNumberStr = String(sequenceNumber).padStart(4, "0");

  return `OBMF${month}${year}${sequenceNumberStr}`;
}
