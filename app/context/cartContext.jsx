"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

//1) Creating the context----------------------------------------------------------------
export const cartContext = createContext();

//2) Creating the provider----------------------------------------------------------------
export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("/api/products");
        const allProducts = await response.json();
        setProducts(allProducts);
      } catch (error) {
        console.log(
          "An error occured while getting products in the context api",
          error
        );
      }
    }
    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  return (
    <cartContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}

//3) Creating the Use Context Hook----------------------------------------------------------------

export function useCart() {
  // use the useContext hook to access the context data
  const context = useContext(cartContext);
  return context;
}
