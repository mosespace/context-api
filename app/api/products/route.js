import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(process.env.FAKE_API);
    const products = await response.json();
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Go to your `api/products/route` to view the problem",
    });
  }
}
