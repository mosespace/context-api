"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

//1) Creating the context----------------------------------------------------------------
export const productContext = createContext();

//2) Creating the provider----------------------------------------------------------------
export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  {/*This Use State function fetches all the products and gets them directly from the api; it try
  to fetch the products and then if it fails, it returns an error object
*/}
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("/api/products");
        const allProducts = await response.json();
        setProducts(allProducts);
      } catch (error) {
        console.log(
          "An error occurred while fetching products in the context api",
          error
        );
      }
    }
    getProducts();
  }, []);

  {/*Ths step adds a single product to the cart and the after sets the cart
  to have it's previous data nad the add the new product. This makes it easy on the client side to be able
  to add multiple products to the cart and being able to see the previous products already added there.
*/}
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    

  };

  {/*This step removes a single product from the cart whose id is equal to the original product id*/}
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  return (
    <productContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
      {children}
    </productContext.Provider>
  );
}

//3) Creating the Use Context Hook----------------------------------------------------------------
export function useCart() {
  // use the useContext hook to access the context data
  const context = useContext(productContext);
  return context;
}