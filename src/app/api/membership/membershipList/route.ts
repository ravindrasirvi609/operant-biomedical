import { connect } from "@/dbConfig/dbConfig";
import Membership from "@/models/membershipModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const memberships = await Membership.find();
    return NextResponse.json({ memberships });
  } catch (error: any) {
    console.error("Error retrieving memberships:", error);
    return NextResponse.json(
      { error: "Failed to retrieve memberships" },
      { status: 500 }
    );
  }
}
