import { NextResponse } from "next/server";
import { connect } from "@/app/shared/database/dbConnection";
import jwt from "jsonwebtoken";
import User from "@/app/shared/models/user";

export async function GET(request: Request) {
  try {
    const token = request.headers.get("Authorization")?.split(" ")[1];

    if (!token) {
      return new NextResponse(
        JSON.stringify({
          message: "Error.",
          details: "Token not found.",
        }),
        { status: 401 }
      );
    }

    let decoded;
    try {
      const jwtKey = process.env.JWT_KEY;
      if (!jwtKey) {
        return new NextResponse(
          JSON.stringify({
            message: "Error.",
            details: "JWT key not found.",
          }),
          { status: 500 }
        );
      }
      decoded = jwt.verify(token, jwtKey);
    } catch {
      return new NextResponse(
        JSON.stringify({
          message: "Error.",
          details: "Invalid token.",
        }),
        { status: 401 }
      );
    }

    const userId = (decoded as { userId: string }).userId;
    const user = await User.findById(userId);

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          message: "Error.",
          details: "User not found.",
        }),
        { status: 404 }
      );
    }

    await connect();

    const users = await User.find();
    return new NextResponse(
      JSON.stringify({
        message: "Success.",
        details: "Fetching all users sucessful.",
        data: users,
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
