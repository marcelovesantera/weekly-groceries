import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/app/shared/database/dbConnection";
import User from "@/app/shared/models/user";
import { generateJWT } from "@/app/utils/generateJwt";
import { ILoginUser } from "@/app/shared/interfaces/user";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email || !body.password) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Email and password are required.",
        }),
        { status: 400 }
      );
    }

    await connect();

    const userLogin: ILoginUser = { ...body };

    const userData = await User.findOne({
      email: userLogin.email,
      isActive: true,
    });

    if (!userData) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "User not found.",
        }),
        { status: 404 }
      );
    }

    const passwordMatch = await bcrypt.compare(
      userLogin.password,
      userData.password
    );
    if (!passwordMatch) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Email or password do not match.",
        }),
        { status: 404 }
      );
    }

    const tokenJWT = await generateJWT({
      userId: userData._id,
      email: userData.email,
    });
    await User.updateOne(
      { _id: userData._id },
      { token: tokenJWT, isOnline: true, updatedAt: new Date() }
    );

    userData.password = undefined;

    return new NextResponse(
      JSON.stringify({
        message: "Success.",
        details: "Login successfull.",
        data: userData,
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
