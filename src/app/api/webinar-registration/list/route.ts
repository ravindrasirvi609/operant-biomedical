import { connect } from "@/dbConfig/dbConfig";
import WebinarRegistration from "@/models/webinarRegistrationModel";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    await connect();

    const registrations = await WebinarRegistration.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(
      { registrations },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error: any) {
    console.error("Error retrieving webinar registrations:", error);
    return NextResponse.json(
      { error: "Failed to retrieve webinar registrations" },
      { status: 500 }
    );
  }
}
