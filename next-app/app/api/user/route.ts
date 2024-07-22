import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Shobhit Patra",
    email: "hein@gmail.com",
  });
}
