import { NextResponse } from "next/server";

export async function GET(params, { params: { id } }) {
  //   console.log(id);
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const users = await response.json();
    const user = users.find((user) => user.id == id);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
