import { connect } from "@/dbConfig/dbConfig";
import WebinarRegistration from "@/models/webinarRegistrationModel";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const registrations = await WebinarRegistration.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ registrations });
  } catch (error: any) {
    console.error("Error retrieving webinar registrations:", error);
    return NextResponse.json(
      { error: "Failed to retrieve webinar registrations" },
      { status: 500 }
    );
  }
}
