import { connect } from "@/app/shared/database/dbConnection";
import User from "@/app/shared/models/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.email) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed",
          details: "Email is required.",
        }),
        { status: 400 }
      );
    }

    await connect();

    const existingUser = await User.findOne({ email: body.email });
    if (existingUser && existingUser.isActive) {
      return new NextResponse(
        JSON.stringify({
          message: "Success.",
          details: "Email já existe.",
        }),
        { status: 200 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Success.",
        details: "Email não existe.",
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
