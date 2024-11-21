// import * as React from "react";
// import { HeaderPart } from "./HeaderPart";
// import { SaladFood } from "./SaladFood";

// // Define a CartItem interface
// interface CartItem extends FoodItem {
//   quantity: number;
// }

// // Create a CartContext to manage cart state globally
// export const CartContext = React.createContext<{
//   cartItems: CartItem[];
//   addToCart: (item: FoodItem) => void;
//   removeFromCart: (itemId: number) => void;
//   clearCart: () => void;
// }>({
//   cartItems: [],
//   addToCart: () => {},
//   removeFromCart: () => {},
//   clearCart: () => {},
// });

// // CartProvider component to wrap the entire app
// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

//   const addToCart = (item: FoodItem) => {
//     setCartItems((prevItems) => {
//       // Check if item already exists in cart
//       const existingItemIndex = prevItems.findIndex(
//         (cartItem) => cartItem._id === item._id
//       );

//       if (existingItemIndex > -1) {
//         // If item exists, increase quantity
//         const updatedItems = [...prevItems];
//         updatedItems[existingItemIndex].quantity += 1;
//         return updatedItems;
//       } else {
//         // If item doesn't exist, add with quantity 1
//         return [...prevItems, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (itemId: number) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item._id !== itemId)
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
