import prisma from "@/app/config/db";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { createUserSchema } from "./type";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const parseData = createUserSchema.safeParse(body);

  if (!parseData.success) {
    return NextResponse.json({ message: parseData.error });
  }

  const hashedPassword = await bcrypt.hash(parseData.data.password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        ...parseData.data,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error while creating user",
      error: error,
    });
  }
}
