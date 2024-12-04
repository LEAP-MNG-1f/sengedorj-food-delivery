"use client";
import HeaderPart from "@/components/Header";
import { Footer } from "@/components/pages/Footer";
import React, { useEffect, useState } from "react";

const OrderSummary = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    district: "",
    khoroo: "",
    street: "",
    phone: "",
    plus: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.district) newErrors.district = "заавал бөглөх";
    if (!formData.khoroo) newErrors.khoroo = "заавал бөглөх";
    if (!formData.street) newErrors.street = "заавал бөглөх";
    if (!formData.plus) newErrors.plus = "заавал бөглөх";
    if (!formData.phone) newErrors.phone = "заавал бөглөх";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Төлбөрийн аргыг сонгоно уу.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const order = {
      id: `#${Math.floor(Math.random() * 100000)}`,
      name: "Order Summary",
      buyerInfo: { phone: formData.phone, name: "Хэрэглэгч" },
      payment: {
        amount: `${calculateTotal()}₮`,
        status: formData.paymentMethod === "card" ? "Paid" : "Not Paid",
      },
      address: `${formData.district}, ${formData.khoroo}, ${formData.street}, ${formData.plus}`,
      deliveryState: "Progress",
      image: cartItems[0]?.food?.image || "",
    };

    const savedOrders = localStorage.getItem("orders");
    const orders = savedOrders ? JSON.parse(savedOrders) : [];
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Захиалга амжилттай хийгдлээ!");
    setFormData({
      district: "",
      khoroo: "",
      street: "",
      phone: "",
      plus: "",
      paymentMethod: "",
    });
    setCartItems([]);
    localStorage.removeItem("cartItems");
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
              {/* District Select */}
              <div>
                <label
                  htmlFor="district"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Дүүрэг сонгоно уу
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    errors.district ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Сонгох...</option>
                  <option value="bayanzurkh">Баянзүрх</option>
                  <option value="sukhbaatar">Сүхбаатар</option>
                </select>
                {errors.district && (
                  <p className="text-red-500 text-sm">{errors.district}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="khoroo"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Хороо сонгоно уу
                </label>
                <select
                  id="khoroo"
                  name="khoroo"
                  value={formData.khoroo}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    errors.khoroo ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Сонгох...</option>
                  <option value="1">1-р хороо</option>
                  <option value="2">2-р хороо</option>
                </select>
                {errors.khoroo && (
                  <p className="text-red-500 text-sm">{errors.khoroo}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="street"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Байр, гудамж сонгоно уу
                </label>
                <select
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    errors.street ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Сонгох...</option>
                  <option value="street1">Гандангийн гудамж</option>
                  <option value="street2">Зүүн 4 зам</option>
                </select>
                {errors.street && (
                  <p className="text-red-500 text-sm">{errors.street}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="plus"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Нэмэлт мэдээлэл
                </label>
                <textarea
                  id="plus"
                  name="plus"
                  value={formData.plus}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    errors.plus ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Орц, давхар, орцны код..."
                ></textarea>
                {errors.plus && (
                  <p className="text-red-500 text-sm">{errors.plus}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Утасны дугаар<span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Утасны дугаараа оруулна уу"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Төлбөрийн арга сонгоно уу
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center text-gray-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleInputChange}
                      className="form-radio text-blue-500 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2">Бэлнээр</span>
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="form-radio text-blue-500 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2">Картаар</span>
                  </label>
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.paymentMethod}
                  </p>
                )}
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
                  <div
                    key={item.food._id}
                    className="flex items-center gap-4 mb-4"
                  >
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
                <div className="text-right mt-4">
                  <p className="text-gray-600">Нийт төлөх дүн:</p>
                  <p className="text-green-600 text-2xl font-bold">
                    {calculateTotal()}₮
                  </p>
                </div>
              </>
            )}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-all"
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
