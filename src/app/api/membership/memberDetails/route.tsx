import { connect } from "@/dbConfig/dbConfig";
import Membership from "@/models/membershipModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    const member = await Membership.findById(id);
    if (!member) {
      return NextResponse.json({ error: "Members not found" }, { status: 404 });
    }

    return NextResponse.json({ member });
  } catch (error: any) {
    console.error("Error retrieving members Details:", error);
    return NextResponse.json(
      { error: "Failed to retrieve membership plan" },
      { status: 500 }
    );
  }
}
