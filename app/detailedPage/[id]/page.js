"use client";
import React from "react";
import DetailedProduct from "@/app/components/Detailed Product";
import { useCart } from "@/app/context/cartContext";

export default function Detailed({ params: { id } }) {
  const { products } = useCart();
  const product = products.find((product) => product.id == id);

  if (!product) {
    return (
      <>
        <h1>You have not selected any Product</h1>
      </>
    );
  }

  return (
    <>
      <DetailedProduct product={product} />
    </>
  );
}
