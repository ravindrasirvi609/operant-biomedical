import { connect } from "@/dbConfig/dbConfig";
import MembershipPlan from "@/models/membershipPlanModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    await connect();

    const membershipPlans = await MembershipPlan.find();
    return NextResponse.json({ membershipPlans });
  } catch (error: any) {
    console.error("Error retrieving membership plans:", error);
    return NextResponse.json(
      { error: "Failed to retrieve membership plans" },
      { status: 500 }
    );
  }
}
