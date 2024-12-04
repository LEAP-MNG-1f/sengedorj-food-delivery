// "use client";
// import React, { useState } from "react";
// import { FoodModal } from "../card/Food";

// interface FoodItem {
//   _id?: number;
//   img: string;
//   text: string;
//   amount: number;
//   ingredients: string;
// }

// export const SaleFood = () => {
//   const [cart, setCart] = useState<(FoodItem & { quantity: number })[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

//   const foods: FoodItem[] = [
//     {
//       _id: 1,
//       img: "http://res.cloudinary.com/dqjfodxqd/image/upload/v1731989910/bhfq861k2lf94tw4vff2.jpg",
//       text: "Өглөөний хоол",
//       amount: 5000,
//       ingredients: "Өндөг, Сүү, Гурил",
//     },
//     {
//       _id: 2,
//       img: "https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg",
//       text: "Үдийн хоол",
//       amount: 7000,
//       ingredients: "Мах, Лууван, Төмс",
//     },
//     {
//       _id: 3,
//       img: "https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg",
//       text: "Оройн хоол",
//       amount: 8000,
//       ingredients: "Ногоо, Гоймон, Соус",
//     },
//     {
//       _id: 4,
//       img: "https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg",
//       text: "Өөр оройн хоол",
//       amount: 8000,
//       ingredients: "Ногоо, Гоймон, Соус",
//     },
//   ];

//   const openModal = (food: FoodItem) => {
//     setSelectedFood(food);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedFood(null);
//     setIsModalOpen(false);
//   };

//   const addToCart = (item: { quantity: number }) => {
//     if (!selectedFood) return;

//     const existingItemIndex = cart.findIndex(
//       (cartItem) => cartItem.text === selectedFood.text
//     );

//     if (existingItemIndex > -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].quantity += item.quantity;
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...selectedFood, quantity: item.quantity }]);
//     }

//     closeModal();
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-6 py-8 container mx-auto">
//         <div className="overflow-x-auto pb-4">
//           <div className="flex gap-6 min-w-min justify-between">
//             {foods.map((food, index) => (
//               <div
//                 key={index}
//                 onClick={() => openModal(food)}
//                 className="w-[300px] flex-shrink-0 cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
//               >
//                 <div className="relative overflow-hidden h-[180px]">
//                   <img
//                     src={food.img}
//                     alt={food.text}
//                     className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h2 className="font-bold text-xl text-gray-800 mb-2">
//                     {food.text}
//                   </h2>
//                   <p className="text-green-500 text-lg font-semibold">
//                     {food.amount.toLocaleString()}₮
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {selectedFood && (
//           <FoodModal
//             img={selectedFood.img}
//             text={selectedFood.text}
//             amount={selectedFood.amount}
//             ingredients={selectedFood.ingredients}
//             isOpen={isModalOpen}
//             onClose={closeModal}
//           />
//         )}
//       </div>
//     </>
//   );
// };
