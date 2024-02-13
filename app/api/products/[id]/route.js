import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  console.log(id);

  try {
    const response = await fetch(process.env.FAKE_API);
    const products = await response.json();
    const finalProduct = products.find((product) => product.id == id);
    return NextResponse.json(finalProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Go to your `api/products/route` to view the problem",
    });
  }
}
