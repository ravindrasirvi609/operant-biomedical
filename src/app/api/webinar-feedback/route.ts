import { connect } from "@/dbConfig/dbConfig";
import WebinarFeedback from "@/models/webinarFeedbackModel";
import WebinarRegistration from "@/models/webinarRegistrationModel";
import { NextRequest, NextResponse } from "next/server";

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function GET(req: NextRequest) {
  try {
    await connect();

    const { searchParams } = new URL(req.url);
    const email = normalizeString(searchParams.get("email")).toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const registration = (await WebinarRegistration.findOne({ email }).lean()) as
      | {
          fullName: string;
          email: string;
        }
      | null;

    if (!registration) {
      return NextResponse.json({
        registered: false,
        exists: false,
      });
    }

    const feedback = await WebinarFeedback.findOne({ email }).lean();

    return NextResponse.json({
      registered: true,
      exists: Boolean(feedback),
      registration: {
        fullName: registration.fullName,
        email: registration.email,
      },
      feedback,
    });
  } catch (error) {
    console.error("Webinar feedback lookup error:", error);
    return NextResponse.json(
      { error: "Failed to look up webinar feedback." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connect();

    const body = await req.json();
    const payload = {
      email: normalizeString(body.email).toLowerCase(),
      fullName: normalizeString(body.fullName),
      overallSatisfaction: normalizeString(body.overallSatisfaction),
      contentRelevance: normalizeString(body.contentRelevance),
      speakerEffectiveness: normalizeString(body.speakerEffectiveness),
      technicalExperience: normalizeString(body.technicalExperience),
      keyTakeaway: normalizeString(body.keyTakeaway),
      suggestions: normalizeString(body.suggestions),
      consentToContact: Boolean(body.consentToContact),
    };

    const registration = await WebinarRegistration.findOne({
      email: payload.email,
    }).lean();

    if (!registration) {
      return NextResponse.json(
        { error: "This email is not registered for the webinar." },
        { status: 404 }
      );
    }

    if (!payload.fullName || !payload.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const requiredFields = [
      "overallSatisfaction",
      "contentRelevance",
      "speakerEffectiveness",
      "technicalExperience",
      "keyTakeaway",
    ] as const;

    for (const field of requiredFields) {
      if (!payload[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!payload.consentToContact) {
      return NextResponse.json(
        { error: "Please confirm the consent checkbox." },
        { status: 400 }
      );
    }

    const feedback = await WebinarFeedback.findOneAndUpdate(
      { email: payload.email },
      payload,
      { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true }
    );

    return NextResponse.json(
      {
        message: "Feedback submitted successfully.",
        feedbackId: feedback._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Webinar feedback error:", error);
    if (error?.name === "ValidationError") {
      const details = Object.values(error.errors || {}).map((err: any) => err.message);
      return NextResponse.json(
        { error: "Validation failed", details },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit webinar feedback." },
      { status: 500 }
    );
  }
}
