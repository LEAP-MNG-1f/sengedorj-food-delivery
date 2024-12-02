"use client";

import { HeaderPart } from "@/components/Header";
import { Footer } from "@/components/pages/Footer";
import { DataSaverOff } from "@mui/icons-material";
import React from "react";

const AddressForm = () => {
  return (
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
  );
};

const OrderSummary = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Захиалга баталгаажуулах
      </h2>
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Main Pizza"
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Main Pizza</h3>
          <p className="text-gray-600">
            Хулуу, төмс, лууван, сонгино, цөцгий тос, самрын үр
          </p>
          dsad
        </div>
      </div>

      <div className="text-right">
        <p className="text-gray-600">Нийт төлөх дүн:</p>
        <p className="text-green-600 text-2xl font-bold">34,800₮</p>
      </div>
      <button
        className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-all"
        onClick={() => alert("Захиалга хийгдлээ!")}
      >
        Захиалах
      </button>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <HeaderPart />
      <div className="container mx-auto pt-[100px] flex gap-8 justify-around pb-[50px]">
        <div className="w-[35%]">
          <AddressForm />
        </div>

        <div className="w-[35%]">
          <OrderSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
