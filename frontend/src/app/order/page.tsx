"use client";
import HeaderPart from "@/components/Header";
import { Footer } from "@/components/pages/Footer";
import React, { useEffect, useState } from "react";

const OrderSummary = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.food.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <HeaderPart />
      <div className="container mx-auto flex justify-between gap-[70px] pb-[50px] pt-[30px]">
        <div className="w-[50%]">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Хаягийн мэдээлэл оруулах
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="district"
                >
                  Дүүрэг сонгоно уу
                </label>
                <select
                  id="district"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Сонгох...</option>
                  <option value="bayanzurkh">Баянзүрх</option>
                  <option value="sukhbaatar">Сүхбаатар</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="khoroo"
                >
                  Хороо сонгоно уу
                </label>
                <select
                  id="khoroo"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Сонгох...</option>
                  <option value="1">1-р хороо</option>
                  <option value="2">2-р хороо</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="street"
                >
                  Байр, гудамж сонгоно уу
                </label>
                <select
                  id="street"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Сонгох...</option>
                  <option value="street1">Гандангийн гудамж</option>
                  <option value="street2">Зүүн 4 зам</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="additional"
                >
                  Нэмэлт мэдээлэл
                </label>
                <textarea
                  id="additional"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Орц, давхар, орцны код..."
                ></textarea>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Утасны дугаар<span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Утасны дугаараа оруулна уу"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2">Бэлнээр</span>
                </label>
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2">Картаар</span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Сагс хоосон байна
              </div>
            ) : (
              <>
                {cartItems.map((item: any) => (
                  <div className="flex items-center gap-4" key={item.food._id}>
                    <img
                      src={item.food.image}
                      alt={item.food.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.food.name}
                      </h3>
                      <p className="text-gray-600">{item.food.ingredient}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      {item.food.price * item.quantity}₮
                    </div>
                  </div>
                ))}
                <div className="text-right">
                  <p className="text-gray-600">Нийт төлөх дүн:</p>
                  <p className="text-green-600 text-2xl font-bold">
                    {calculateTotal()}₮
                  </p>
                </div>
              </>
            )}
            <button
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-all"
              onClick={() => alert("Захиалга хийгдлээ!")}
            >
              Захиалах
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSummary;
