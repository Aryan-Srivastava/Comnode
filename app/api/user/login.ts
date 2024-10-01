import {prisma} from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    return NextResponse.json({ message: "Login successful", user });
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
