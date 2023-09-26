"use client";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const router = useRouter;

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const addItemToCart = async ({
    product,
    name,
    price,
    image,
    quantity = 1,
  }) => {
    const item = {
      product,
      name,
      price,
      image,
      quantity,
    };

    const isItemExist = cart?.find((i) => i.product === item.product);

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.map((i) => {
        if (i.product === isItemExist.product) {
          return { ...item, quantity: ++i.quantity };
        }
        return { ...i };
      });
    } else {
      newCartItems = [...cart, item];
    }

    localStorage.setItem("cart", JSON.stringify(newCartItems));
    setCartToState();
  };

  const removeItemToCart = async ({
    product,
    name,
    price,
    image,
    quantity = 1,
  }) => {
    const item = {
      product,
      name,
      price,
      image,
      quantity,
    };

    const isItemExistIndex = cart.findIndex((i) => i.product === item.product);

    let newCartItems;

    if (isItemExistIndex !== -1) {
      newCartItems = [...cart];
      if (newCartItems[isItemExistIndex].quantity > 1) {
        newCartItems[isItemExistIndex].quantity--;
      } else {
        newCartItems.splice(isItemExistIndex, 1);
      }
    } else {
      newCartItems = [...cart, item];
    }

    localStorage.setItem("cart", JSON.stringify(newCartItems));
    setCartToState(newCartItems);
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.filter((i) => i.product !== id);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
    setCartToState();
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        removeItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
