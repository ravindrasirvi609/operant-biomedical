import { connect } from "@/dbConfig/dbConfig";
import Membership from "@/models/membershipModel";
import MembershipPlan from "@/models/membershipPlanModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const memberships = await Membership.find({ isValidMember: true });
    const membershipPlans = await MembershipPlan.find();

    return NextResponse.json({ membershipPlans, memberships });
  } catch (error: any) {
    console.error("Error retrieving memberships:", error);
    return NextResponse.json(
      { error: "Failed to retrieve memberships" },
      { status: 500 }
    );
  }
}
