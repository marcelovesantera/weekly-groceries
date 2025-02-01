import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/app/shared/database/dbConnection";
import { generateJWT } from "@/app/utils/generateJwt";
import User from "@/app/shared/models/user";
import OtpCode from "@/app/shared/models/otpCode";
import { IRegisterUser } from "@/app/shared/interfaces/user";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.firstName) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Name is required.",
        }),
        { status: 400 }
      );
    }

    if (!body.lastName) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Lastame is required.",
        }),
        { status: 400 }
      );
    }

    if (!body.email) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Email is required.",
        }),
        { status: 400 }
      );
    }

    if (!body.password || !body.confirmPassword) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Password and Confirm Password are required.",
        }),
        { status: 400 }
      );
    }

    if (body.password !== body.confirmPassword) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Passwords do not match.",
        }),
        { status: 400 }
      );
    }

    await connect();

    const existingUser = await User.findOne({ email: body.email });
    if (existingUser && existingUser.isActive) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed.",
          details: "Email already exists.",
        }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const createUser: IRegisterUser = { ...body };

    if (existingUser && !existingUser.isActive) {
      const tokenJWT = await generateJWT({
        userId: existingUser._id,
        email: existingUser.email,
      });

      await User.updateOne(
        { _id: existingUser._id },
        {
          ...createUser,
          isActive: true,
          updatedAt: new Date(),
          password: hashedPassword,
          token: tokenJWT,
        }
      );
      existingUser.token = tokenJWT;
      existingUser.password = undefined;
      existingUser.isActive = true;

      await OtpCode.deleteOne({ email: existingUser.email, otptype: 1 });

      return new NextResponse(
        JSON.stringify({
          message: "Success.",
          details: "User created.",
          data: existingUser,
        }),
        { status: 201 }
      );
    }

    if (!existingUser) {
      const newUser = await User.create(
        new User({ ...createUser, password: hashedPassword })
      );

      if (!newUser) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed.",
            details: "Bad request.",
          }),
          { status: 400 }
        );
      }

      const tokenJWT = await generateJWT({
        userId: newUser._id,
        email: newUser.email,
      });
      await OtpCode.deleteOne({ email: newUser.email, otptype: 1 });
      await User.updateOne({ _id: newUser._id }, { token: tokenJWT });
      newUser.token = tokenJWT;
      newUser.password = undefined;

      return new NextResponse(
        JSON.stringify({
          message: "Success.",
          details: "User created.",
          data: newUser,
        }),
        { status: 201 }
      );
    }
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
