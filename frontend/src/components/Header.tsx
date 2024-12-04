// import * as React from "react";
// import { PineIcon } from "./icons/Pinecone";
// import Link from "next/link";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PersonIcon from "@mui/icons-material/Person";
// import SearchIcon from "@mui/icons-material/Search";
// import Cart from "./Cart";

// const navigationItems = [
//   { label: "НҮҮР", path: "/" },
//   { label: "ХООЛНЫ ЦЭС", path: "/food-menu" },
//   { label: "ХҮРГЭЛТИЙН БҮС", path: "/delivery" },
// ];

// type CartItem = {
//   food: {
//     _id: string;
//     name: string;
//     price: number;
//     image: string;
//     ingredient: string;
//   };
//   quantity: number;
// };

// export const HeaderPart: React.FC = () => {
//   const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);
//   const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
//     const savedCartItems = localStorage.getItem("cartItems");
//     return savedCartItems ? JSON.parse(savedCartItems) : [];
//   });

//   const toggleCart = (open: boolean) => () => {
//     setIsCartOpen(open);
//   };

//   const handleRemoveItem = (foodId: string) => {
//     const updatedCartItems = cartItems.filter(
//       (item) => item.food._id !== foodId
//     );
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//   };

//   const handleUpdateQuantity = (foodId: string, quantity: number) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.food._id === foodId) {
//         return { ...item, quantity };
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//   };

//   return (
//     <>
//       <header className="fixed w-full top-0 z-50 bg-white shadow-md">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-12">
//               <Link
//                 href="/"
//                 className="transition-transform duration-300 hover:scale-105"
//               >
//                 <PineIcon />
//               </Link>

//               <nav className="flex items-center space-x-8">
//                 {navigationItems.map((item) => (
//                   <Link
//                     key={item.label}
//                     href={item.path}
//                     className="relative font-medium text-gray-800 hover:text-black transition-colors duration-300 group py-2"
//                     aria-label={item.label}
//                   >
//                     <span className="text-sm tracking-wide">{item.label}</span>
//                     <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="flex items-center space-x-8">
//               <div className="relative w-[300px] group">
//                 <input
//                   type="search"
//                   className="w-full px-4 py-2.5 rounded-full border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 outline-none text-sm"
//                   placeholder="Хайх..."
//                   aria-label="Search"
//                 />
//                 <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
//               </div>

//               <button
//                 onClick={toggleCart(true)}
//                 className="flex items-center space-x-2 group py-2 px-3 rounded-full hover:bg-gray-50 transition-all duration-300"
//                 aria-expanded={isCartOpen}
//                 aria-label="Open cart"
//               >
//                 <ShoppingCartIcon className="text-gray-800 group-hover:text-black transition-colors duration-300" />
//                 <span className="font-medium text-sm text-gray-800 group-hover:text-black transition-colors duration-300">
//                   Сагс ({cartItems.length})
//                 </span>
//               </button>

//               <Link
//                 href="/login"
//                 className="flex items-center space-x-2 group py-2 px-3 rounded-full hover:bg-gray-50 transition-all duration-300"
//                 aria-label="Profile"
//               >
//                 <PersonIcon className="text-gray-800 group-hover:text-black transition-colors duration-300" />
//                 <span className="font-medium text-sm text-gray-800 group-hover:text-black transition-colors duration-300">
//                   Нэвтрэх
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="mt-[100px]"></div>

//       <Cart
//         cartItems={cartItems}
//         isOpen={isCartOpen}
//         onClose={toggleCart(false)}
//         onRemoveItem={handleRemoveItem}
//         onUpdateQuantity={handleUpdateQuantity}
//       />
//     </>
//   );
// };

// export default HeaderPart;
import React, { useState, useEffect } from "react";
import { PineIcon } from "./icons/Pinecone";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Cart from "./Cart";

// Navigation items (existing data)
const navigationItems = [
  { label: "НҮҮР", path: "/" },
  { label: "ХООЛНЫ ЦЭС", path: "/food-menu" },
  { label: "ХҮРГЭЛТИЙН БҮС", path: "/delivery" },
];

type CartItem = {
  food: {
    _id: string;
    name: string;
    price: number;
    image: string;
    ingredient: string;
  };
  quantity: number;
};

export const HeaderPart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Ensure localStorage is only accessed on the client side
    if (typeof window !== "undefined") {
      const savedCartItems = localStorage.getItem("cartItems");
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
      }
    }
  }, []);

  const toggleCart = (open: boolean) => () => {
    setIsCartOpen(open);
  };

  const handleRemoveItem = (foodId: string) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.food._id !== foodId
    );
    setCartItems(updatedCartItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const handleUpdateQuantity = (foodId: string, quantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.food._id === foodId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <Link
                href="/"
                className="transition-transform duration-300 hover:scale-105"
              >
                <PineIcon />
              </Link>

              <nav className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.path}
                    className="relative font-medium text-gray-800 hover:text-black transition-colors duration-300 group py-2"
                    aria-label={item.label}
                  >
                    <span className="text-sm tracking-wide">{item.label}</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-8">
              <div className="relative w-[300px] group">
                <input
                  type="search"
                  className="w-full px-4 py-2.5 rounded-full border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 outline-none text-sm"
                  placeholder="Хайх..."
                  aria-label="Search"
                />
                <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
              </div>

              <button
                onClick={toggleCart(true)}
                className="flex items-center space-x-2 group py-2 px-3 rounded-full hover:bg-gray-50 transition-all duration-300"
                aria-expanded={isCartOpen}
                aria-label="Open cart"
              >
                <ShoppingCartIcon className="text-gray-800 group-hover:text-black transition-colors duration-300" />
                <span className="font-medium text-sm text-gray-800 group-hover:text-black transition-colors duration-300">
                  Сагс ({cartItems.length})
                </span>
              </button>

              <Link
                href="/login"
                className="flex items-center space-x-2 group py-2 px-3 rounded-full hover:bg-gray-50 transition-all duration-300"
                aria-label="Profile"
              >
                <PersonIcon className="text-gray-800 group-hover:text-black transition-colors duration-300" />
                <span className="font-medium text-sm text-gray-800 group-hover:text-black transition-colors duration-300">
                  Нэвтрэх
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-[74px]"></div>

      <Cart
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={toggleCart(false)}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </>
  );
};

export default HeaderPart;
