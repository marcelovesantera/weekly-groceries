import { NextResponse } from "next/server";
import { generateOTP } from "@/app/utils/generateOtp";
import { sendOtp } from "@/app/utils/sendOtp";
import { connect } from "@/app/shared/database/dbConnection";
import OtpCode from "@/app/shared/models/otpCode";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.email) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Email is required.",
        }),
        { status: 400 }
      );
    }

    const newOtp = generateOTP();

    await connect();

    let otpCode = await OtpCode.findOneAndUpdate(
      { email: body.email, otptype: 1 },
      { otpcode: newOtp }
    );

    if (!otpCode) {
      otpCode = await OtpCode.create({
        email: body.email,
        otpcode: newOtp,
        otptype: 1,
      });
    }

    if (!otpCode) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Error in creating OTP code in database.",
        }),
        { status: 400 }
      );
    }

    await sendOtp(
      body.email,
      newOtp,
      "Verification code.",
      "Hello, welcome to our platform."
    );

    return new NextResponse(
      JSON.stringify({
        message: "Success.",
        details: "OTP code created and sent to your email.",
      }),
      { status: 200 }
    );
  } catch (error: unknown) {
    return new NextResponse(
      JSON.stringify({
        message: "Error.",
        details: (error as Error).message,
      }),
      { status: 500 }
    );
  }
}
