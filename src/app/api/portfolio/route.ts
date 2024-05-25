import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { uploadToCloudinary } from "@/cloudinaryConfig/cloudinaryConfig";
import portfolioSchema from "@/models/portfolioModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const files = formData.getAll("images") as File[];
    const imageUploadPromises = files.map(async (file) => {
      const fileBuffer = await file.arrayBuffer();
      const mimeType = file.type;
      const encoding = "base64";
      const base64Data = Buffer.from(fileBuffer).toString("base64");
      const fileUri = `data:${mimeType};${encoding},${base64Data}`;
      return await uploadToCloudinary(fileUri, file.name);
    });

    const uploadResults = await Promise.all(imageUploadPromises);

    const imageUrls = uploadResults
      .map((res) => {
        if (res.success && res.result) {
          return res.result.secure_url;
        }
        return null;
      })
      .filter((url) => url !== null);

    if (imageUrls.length !== files.length) {
      throw new Error("Some files failed to upload");
    }

    const entries = Array.from(formData.entries()) as [
      string,
      FormDataEntryValue
    ][];
    const data: { [key: string]: any } = {};
    entries.forEach(([key, value]) => {
      const arrayFieldMatch = key.match(/(.+)\[(\d+)\]/);
      if (arrayFieldMatch) {
        const fieldName = arrayFieldMatch[1];
        const index = parseInt(arrayFieldMatch[2], 10);
        if (!data[fieldName]) {
          data[fieldName] = [];
        }
        data[fieldName][index] = value;
      } else {
        if (key in data) {
          if (Array.isArray(data[key])) {
            (data[key] as FormDataEntryValue[]).push(value);
          } else {
            data[key] = [data[key] as FormDataEntryValue, value];
          }
        } else {
          data[key] = value;
        }
      }
    });

    const { title, client, services, date, des } = data as {
      title: string;
      client: string;
      services: string;
      date: string;
      des: string;
    };

    const challenges = Array.isArray(data.challenges)
      ? data.challenges
      : [data.challenges];
    const solutions = Array.isArray(data.solutions)
      ? data.solutions
      : [data.solutions];

    const newPortfolio = new portfolioSchema({
      title: title,
      client: client,
      services: services,
      date: date,
      des: des,
      images: imageUrls,
      challenges: challenges.filter(
        (item) => typeof item === "string" && item !== ""
      ),
      solutions: solutions.filter(
        (item) => typeof item === "string" && item !== ""
      ),
    });

    const savedPortfolio = await newPortfolio.save();
    return NextResponse.json({
      message: "Portfolio added successfully",
      portfolio: savedPortfolio,
    });
  } catch (error: any) {
    console.error("Error adding portfolio:", error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (error: any) => error.message
      );
      return NextResponse.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to add portfolio" },
        { status: 500 }
      );
    }
  }
}
