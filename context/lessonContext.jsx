"use client";
import { createContext, useContext, useEffect, useState } from "react";

//1)  creating the context instance
export const ourContext = createContext();

//2) Creating the provider
export function CreateProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`/api/products`);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.log("Failed to get products:", error);
      }
    }
    getProducts();
    async function getUsers() {
      try {
        const response = await fetch(`/api/users`);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log("Failed to get users:", error);
      }
    }
    getUsers();
  }, []);

  return (
    <ourContext.Provider value={{ products, users }}>
      {children}
    </ourContext.Provider>
  );
}

//3) Creating the Use Context Hook----------------------------------------------------------------
export function finalContext() {
  const myContext = useContext(ourContext);
  return myContext;
}
