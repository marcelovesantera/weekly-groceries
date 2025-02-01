import { connect } from "@/app/shared/database/dbConnection";
import OtpCode from "@/app/shared/models/otpCode";
import User from "@/app/shared/models/user";
import { generateOTP } from "@/app/utils/generateOtp";
import { sendOtp } from "@/app/utils/sendOtp";
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

    await connect();

    const user = await User.findOne({ email: body.email, isActive: true });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "User not found.",
        }),
        { status: 404 }
      );
    }

    const newOtp = generateOTP();

    let otpCode = await OtpCode.findOneAndUpdate(
      { email: body.email, otptype: 2 },
      { otpcode: newOtp }
    );

    if (!otpCode) {
      otpCode = await OtpCode.create({
        email: body.email,
        otpcode: newOtp,
        otptype: 2,
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
      "Resetar a senha.",
      "Olá, ouvi falar que você esqueceu a sua senha."
    );

    return new NextResponse(
      JSON.stringify({
        message: "Success.",
        details:
          "Caso tenha seu email cadastrado, você receberá um código de 6 dígitos.",
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
