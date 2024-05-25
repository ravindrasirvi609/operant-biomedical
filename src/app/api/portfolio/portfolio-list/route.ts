import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import portfolioSchema from "@/models/portfolioModel";

connect();

export async function GET(req: NextRequest) {
  try {
    const portfolios = await portfolioSchema.find({});

    return NextResponse.json({
      message: "Portfolios fetched successfully",
      portfolios,
    });
  } catch (error: any) {
    console.error("Error fetching portfolios:", error);

    return NextResponse.json(
      { error: "Failed to fetch portfolios" },
      { status: 500 }
    );
  }
}
