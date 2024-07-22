import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = req.body;
  console.log(user);
  return NextResponse.json({
    msg: "logged in sucker",
    user: user,
  });
}
