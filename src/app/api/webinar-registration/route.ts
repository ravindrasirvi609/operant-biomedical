import { connect } from "@/dbConfig/dbConfig";
import WebinarRegistration from "@/models/webinarRegistrationModel";
import { WEBINAR_REGISTRATION_CLOSED } from "@/lib/webinarRegistrationStatus";
import { NextRequest, NextResponse } from "next/server";

const adminEmail = "admin@obrf.org.in";

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

    const registration = await WebinarRegistration.findOne({ email }).lean();

    return NextResponse.json({
      exists: Boolean(registration),
      registration,
    });
  } catch (error) {
    console.error("Webinar registration lookup error:", error);
    return NextResponse.json(
      { error: "Failed to look up webinar registration." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (WEBINAR_REGISTRATION_CLOSED) {
      return NextResponse.json(
        { error: "Webinar registration is now closed." },
        { status: 403 }
      );
    }

    await connect();

    const body = await req.json();

    const payload = {
      fullName: normalizeString(body.fullName),
      gender: normalizeString(body.gender),
      email: normalizeString(body.email).toLowerCase(),
      mobileNumber: normalizeString(body.mobileNumber),
      country: normalizeString(body.country),
      stateProvince: normalizeString(body.stateProvince),
      city: normalizeString(body.city),
      professionalCategory: normalizeString(body.professionalCategory),
      otherProfessionalCategory: normalizeString(body.otherProfessionalCategory),
      designation: normalizeString(body.designation),
      departmentSpecialization: normalizeString(body.departmentSpecialization),
      organizationName: normalizeString(body.organizationName),
      organizationType: normalizeString(body.organizationType),
      otherOrganizationType: normalizeString(body.otherOrganizationType),
      yearsExperience: normalizeString(body.yearsExperience),
      objectives: Array.isArray(body.objectives)
        ? body.objectives.map(normalizeString).filter(Boolean)
        : [],
      otherObjective: normalizeString(body.otherObjective),
      futureWorkshopsInterest: normalizeString(body.futureWorkshopsInterest),
      consentCommunications: Boolean(body.consentCommunications),
      informationAccurate: Boolean(body.informationAccurate),
    };

    const requiredFields = [
      "fullName",
      "gender",
      "email",
      "mobileNumber",
      "country",
      "stateProvince",
      "city",
      "professionalCategory",
      "designation",
      "departmentSpecialization",
      "organizationName",
      "organizationType",
      "yearsExperience",
      "futureWorkshopsInterest",
    ] as const;

    for (const field of requiredFields) {
      if (!payload[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!payload.consentCommunications || !payload.informationAccurate) {
      return NextResponse.json(
        { error: "Both consent checkboxes must be selected." },
        { status: 400 }
      );
    }

    const registration = await WebinarRegistration.findOneAndUpdate(
      { email: payload.email },
      payload,
      { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true }
    );

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const objectiveLines = payload.objectives.length
      ? payload.objectives
          .map((objective: string) => `<li>${objective}</li>`)
          .join("")
      : "<li>Not specified</li>";

    const optionalLine = (label: string, value?: string) =>
      value ? `<li><strong>${label}:</strong> ${value}</li>` : "";

    const html = `
      <div style="font-family: Arial, sans-serif; padding: 24px; color: #0f172a; background: #f8fafc; max-width: 720px; margin: auto; border: 1px solid #e2e8f0; border-radius: 16px;">
        <div style="background: linear-gradient(135deg, #0f172a, #0f766e); padding: 24px; border-radius: 14px; color: white;">
          <p style="margin: 0; text-transform: uppercase; letter-spacing: 0.18em; font-size: 12px;">OBRF Webinar Registration</p>
          <h1 style="margin: 12px 0 0; font-size: 28px;">New participant registered</h1>
        </div>
        <p style="font-size: 16px; line-height: 1.7; margin-top: 20px;">A new registration has been submitted for the webinar on AI technologies and ICMR funding opportunities.</p>
        <h2 style="font-size: 20px; margin-top: 24px;">Participant details</h2>
        <ul style="padding-left: 20px; line-height: 1.8;">
          <li><strong>Name:</strong> ${payload.fullName}</li>
          <li><strong>Gender:</strong> ${payload.gender}</li>
          <li><strong>Email:</strong> ${payload.email}</li>
          <li><strong>Mobile:</strong> ${payload.mobileNumber}</li>
          <li><strong>Country:</strong> ${payload.country}</li>
          <li><strong>State/Province:</strong> ${payload.stateProvince}</li>
          <li><strong>City:</strong> ${payload.city}</li>
          <li><strong>Professional Category:</strong> ${payload.professionalCategory}</li>
          ${optionalLine("Other Professional Category", payload.otherProfessionalCategory)}
          <li><strong>Designation:</strong> ${payload.designation}</li>
          <li><strong>Department/Specialization:</strong> ${payload.departmentSpecialization}</li>
          <li><strong>Organization:</strong> ${payload.organizationName}</li>
          <li><strong>Organization Type:</strong> ${payload.organizationType}</li>
          ${optionalLine("Other Organization Type", payload.otherOrganizationType)}
          <li><strong>Years of Experience:</strong> ${payload.yearsExperience}</li>
          <li><strong>Future Workshops Interest:</strong> ${payload.futureWorkshopsInterest}</li>
        </ul>
        <h2 style="font-size: 20px; margin-top: 24px;">Primary objectives</h2>
        <ul style="padding-left: 20px; line-height: 1.8;">${objectiveLines}</ul>
        ${payload.otherObjective ? `<p><strong>Other objective:</strong> ${payload.otherObjective}</p>` : ""}
        <p style="margin-top: 24px; font-size: 14px; color: #475569;">This notification was sent automatically after a successful webinar registration.</p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "OBRF Webinar <noreply@opf.org.in>",
        to: adminEmail,
        reply_to: payload.email,
        subject: `New Webinar Registration: ${payload.fullName}`,
        html,
      }),
    });

    const participantEmailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "OBRF Webinar <noreply@opf.org.in>",
          to: payload.email,
          subject: "Your OBRF Webinar Registration is Successful",
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; color: #0f172a; background: #f8fafc; max-width: 720px; margin: auto; border: 1px solid #e2e8f0; border-radius: 16px;">
              <div style="background: linear-gradient(135deg, #0f172a, #0f766e); padding: 24px; border-radius: 14px; color: white;">
                <p style="margin: 0; text-transform: uppercase; letter-spacing: 0.18em; font-size: 12px;">OBRF Webinar</p>
                <h1 style="margin: 12px 0 0; font-size: 28px;">Registration successful</h1>
              </div>
              <p style="font-size: 16px; line-height: 1.8; margin-top: 20px;">Dear ${payload.fullName},</p>
              <p style="font-size: 16px; line-height: 1.8;">Thank you for registering for the OBRF webinar on <strong>Innovative Approaches in Medical Research: Leveraging AI Technologies and ICMR Funding Opportunities</strong>.</p>
              <p style="font-size: 16px; line-height: 1.8;">We have successfully received your registration details. Our team will review the submission and share further communication regarding the event as it becomes available.</p>
              <div style="margin-top: 24px; padding: 20px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px;">
                <h2 style="font-size: 18px; margin: 0 0 12px;">Registration summary</h2>
                <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
                  <li><strong>Name:</strong> ${payload.fullName}</li>
                  <li><strong>Email:</strong> ${payload.email}</li>
                  <li><strong>Mobile:</strong> ${payload.mobileNumber}</li>
                  <li><strong>Organization:</strong> ${payload.organizationName}</li>
                  <li><strong>Professional Category:</strong> ${payload.professionalCategory}</li>
                </ul>
              </div>
              <p style="font-size: 16px; line-height: 1.8; margin-top: 24px;">If you need any assistance, please contact us at <a href="mailto:${adminEmail}" style="color: #0f766e; text-decoration: none;">${adminEmail}</a>.</p>
              <p style="font-size: 16px; line-height: 1.8; margin-top: 20px;">Warm regards,</p>
              <p style="font-size: 16px; line-height: 1.8; font-weight: bold;">Operant Biomedical Research Federation</p>
            </div>
          `,
        }),
      }
    );

    if (!response.ok || !participantEmailResponse.ok) {
      const adminErrorText = !response.ok ? await response.text() : "";
      const participantErrorText = !participantEmailResponse.ok
        ? await participantEmailResponse.text()
        : "";
      console.error("Resend error:", {
        adminErrorText,
        participantErrorText,
      });
      return NextResponse.json(
        {
          error:
            "Registration was saved, but one or more notification emails could not be sent.",
          registrationId: registration._id,
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        message: "Registration completed successfully.",
        registrationId: registration._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Webinar registration error:", error);

    if (error?.code === 11000) {
      return NextResponse.json(
        { error: "This email is already registered for the webinar." },
        { status: 400 }
      );
    }

    if (error?.name === "ValidationError") {
      const details = Object.values(error.errors || {}).map((err: any) => err.message);
      return NextResponse.json(
        { error: "Validation failed", details },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit webinar registration." },
      { status: 500 }
    );
  }
}
