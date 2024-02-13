"use client";
import React from "react";
import { useCart } from "../context/cartContext";
import Cart from "../components/Cart";

export default function Page() {
  const { cart } = useCart();
  return <Cart data={cart} />;
}
