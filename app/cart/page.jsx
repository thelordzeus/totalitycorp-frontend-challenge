"use client";

import CartContext from "../../context/CartContext";
import React, { useContext } from "react";

function calculateSubtotal(cart) {
  let subtotal = 0;
  for (const cartItem of cart) {
    subtotal += cartItem.price * cartItem.quantity;
  }
  return subtotal;
}

export default function Cart() {
  const { addItemToCart, cart, deleteItemFromCart, removeItemToCart } =
    useContext(CartContext);

  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    removeItemToCart(item);
  };

  const subtotal = calculateSubtotal(cart);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Your Cart
          </h2>
        </div>
        {cart?.length > 0 && (
          <section>
            <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
              {cart?.map((cartItem) => (
                <div className="py-5 sm:py-8" key={cartItem.product}>
                  <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                    <div className="sm:-my-2.5">
                      <a
                        href="#"
                        className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40"
                      >
                        <img
                          src={cartItem.image}
                          loading="lazy"
                          alt={cartItem.name}
                          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                      </a>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <a
                          href="#"
                          className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                        >
                          {cartItem.name}
                        </a>
                      </div>
                      <div>
                        <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                          Quantity: {cartItem.quantity}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          In stock
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full justify-between items-center border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                      <div className="w-24 flex flex-col ">
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                          <button
                            data-action="decrement"
                            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            onClick={() => decreaseQty(cartItem)}
                          >
                            <span className="m-auto text-2xl font-thin">−</span>
                          </button>
                          <input
                            type="number"
                            className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-900  outline-none custom-input-number"
                            name="custom-input-number"
                            value={cartItem.quantity}
                            readOnly
                          ></input>
                          <button
                            data-action="increment"
                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                            onClick={() => increaseQty(cartItem)}
                          >
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                        <button
                          className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 mx-auto mt-3"
                          onClick={() => deleteItemFromCart(cartItem?.product)}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                        <span className="block font-bold text-gray-800 md:text-lg">
                          ${cartItem.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
                <div className="space-y-1">
                  <div className="flex justify-between gap-4 text-gray-500">
                    <span>Subtotal</span>
                    <span>{subtotal}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-gray-500">
                    <span>Shipping</span>
                    <span>$4.99</span>
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="flex items-start justify-between gap-4 text-gray-800">
                    <span className="text-lg font-bold">Total</span>
                    <span className="flex flex-col items-end">
                      <span className="text-lg font-bold">
                        {subtotal + 4.99} USD
                      </span>
                      <span className="text-sm text-gray-500">
                        including VAT
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Check out
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
