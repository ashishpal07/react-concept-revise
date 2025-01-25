import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({
    name: "Ashish Pal",
    email: "ash.pal870@gmail.com",
  });
}

