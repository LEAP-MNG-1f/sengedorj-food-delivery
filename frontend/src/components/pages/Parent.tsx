"use client";
import React from "react";
import { FoodModal } from "../card/Food";
import { HeaderPart } from "../Header";

export const ParentComponent: React.FC = () => {
  const [cart, setCart] = React.useState<
    { img: string; text: string; amount: number; quantity: number }[]
  >([]);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const addToCart = (item: {
    img: string;
    text: string;
    amount: number;
    quantity: number;
  }) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.text === item.text
    );

    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <div>
      <>
        <HeaderPart cart={cart} />
        <FoodModal
          img=""
          text=""
          amount={1}
          ingredients=""
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onAddToCart={addToCart}
        />
      </>
    </div>
  );
};
