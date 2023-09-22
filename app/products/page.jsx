"use client";
import PRODUCTS from "@/data/products";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleSortAscending = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
    console.log(sorted);
    setSortOrder("ascending");
  };

  const handleSortDescending = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
    console.log(sorted);
    setSortOrder("descending");
  };
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Explore our wide range of collection
          </h2>

          <button
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            onClick={handleSortAscending}
          >
            Sort by Price (Low to High)
          </button>
          <button
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            onClick={handleSortDescending}
          >
            Sort by Price (High to Low)
          </button>
        </div>

        <ul className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <div>
                <a
                  href="#"
                  className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                >
                  <img
                    src={product.imageSrc}
                    loading="lazy"
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    sale
                  </span>
                </a>

                <div>
                  <a
                    href="#"
                    className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                  >
                    {product.name}
                  </a>

                  <div className="flex items-end gap-2">
                    <span className="font-bold text-gray-800 lg:text-lg">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
