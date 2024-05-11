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

    const razorpayTransaction = new RazorpayTransaction({
      orderId,
      paymentId,
      signature,
      amount,
      currency,
      status,
      membership,
      plan,
      user,
    });

    const membershipPlan = await Membership.findOneAndUpdate(
      { email: user },
      { isValidMember: true }
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
