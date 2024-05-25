import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import portfolioSchema from "@/models/portfolioModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Portfolio ID is required" },
        { status: 400 }
      );
    }

    const portfolio = await portfolioSchema.findById(id);

    if (!portfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Portfolio details fetched successfully",
      portfolio,
    });
  } catch (error: any) {
    console.error("Error fetching portfolio details:", error);

    return NextResponse.json(
      { error: "Failed to fetch portfolio details" },
      { status: 500 }
    );
  }
}
