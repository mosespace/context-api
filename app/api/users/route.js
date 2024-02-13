import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const users = await response.json();
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
  }
}
