"use client";
import { finalContext } from "@/context/lessonContext";
import Products from "./components/Products";

export default function Home() {
  const { users } = finalContext();
  // console.log(users);
  return (
    <>
      <Products />
      {users.map((user, i) => (
        <h1>{user.email}</h1>
      ))}
    </>
  );
}
