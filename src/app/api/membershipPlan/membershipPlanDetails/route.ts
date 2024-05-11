import { connect } from "@/dbConfig/dbConfig";
import MembershipPlan from "@/models/membershipPlanModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    const membershipPlan = await MembershipPlan.findById(id);
    if (!membershipPlan) {
      return NextResponse.json(
        { error: "Membership plan not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ membershipPlan });
  } catch (error: any) {
    console.error("Error retrieving membership plan:", error);
    return NextResponse.json(
      { error: "Failed to retrieve membership plan" },
      { status: 500 }
    );
  }
}
