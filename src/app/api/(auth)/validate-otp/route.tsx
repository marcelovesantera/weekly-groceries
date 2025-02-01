import { connect } from "@/app/shared/database/dbConnection";
import OtpCode from "@/app/shared/models/otpCode";
import { NextResponse } from "next/server";

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

    if (!body.otpCode) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "OTP code is required.",
        }),
        { status: 400 }
      );
    }

    await connect();

    const otpCode = await OtpCode.findOne({
      email: body.email,
      otpcode: body.otpCode,
      otptype: 1,
    });

    if (!otpCode) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Invalid OTP code.",
        }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Success.",
        details: "OTP code validated.",
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
