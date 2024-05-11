import { connect } from "@/dbConfig/dbConfig";
import MembershipPlan from "@/models/membershipPlanModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const { title, price, description, duration, maxAllowedBooks, discount } =
      await req.json();

    const newMembershipPlan = new MembershipPlan({
      title,
      price,
      description,
      duration,
      maxAllowedBooks,
      discount,
    });

    const savedMembershipPlan = await newMembershipPlan.save();

    return NextResponse.json({
      message: "Membership plan added successfully",
      membershipPlan: savedMembershipPlan,
    });
  } catch (error: any) {
    console.error("Error adding membership plan:", error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (error: any) => error.message
      );
      return NextResponse.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to add membership plan" },
        { status: 500 }
      );
    }
  }
}
