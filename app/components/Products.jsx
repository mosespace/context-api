"use client";
import React from "react";
import Link from "next/link";
import { finalContext } from "@/context/lessonContext";
import { useCart } from "../context/cartContext";

export default function Products() {
  const { products } = useCart();

  // const { products } = finalContext();
  const { addToCart } = useCart();

  // console.log(products);
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900 my-10'>
          All Products
          ----------------------------------------------------------------------------------------------
        </h2>

        {products.map((product) => {
          return (
            <div
              className='mt-6 grid grid-cols gap-x-16 gap-y-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'
              key={product.id}
            >
              <div className='group relative'>
                <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                  <Link href={`/detailedPage/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    />
                  </Link>
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-gray-700'>
                      <span aria-hidden='true' className=' inset-0'></span>
                      {product.title}
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      {product.category}
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className='bg-gray-900 hover:opacity-75  text-white font-bold py-2 px-4 rounded'
                    >
                      Add To Cart
                    </button>
                  </div>
                  <p className='text-sm font-medium text-gray-900'>
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
