import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { name, password } = body;
  console.log(body)

  if ( !name || !password ) {
    return new NextResponse("Missing name or password", { status: 400 })
  }

  const exist = await prisma.user.findUnique({
    where: {
      name: name
    }
  });

  if (exist){
    return new NextResponse('User already exist', { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      password: hashedPassword
    }
  })

  return NextResponse.json(user)
}