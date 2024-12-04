"use client";
import React, { useEffect, useState } from "react";
import HeaderPart from "@/components/Header";

export default function Dashboard() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-600";
      case "Not Paid":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getDeliveryStyles = (state: string) => {
    switch (state) {
      case "Progress":
        return "bg-yellow-100 text-yellow-600";
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Waiting":
        return "bg-gray-100 text-gray-600";
      case "Active":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div>
      <HeaderPart />
      <div className="container mx-auto">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Admin dashboard</h1>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Order name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Buyer info
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Payment
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Delivery state
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-3">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {order.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {order.buyerInfo.phone}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.buyerInfo.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {order.payment.amount}
                      </div>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getStatusStyles(
                          order.payment.status
                        )}`}
                      >
                        {order.payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getDeliveryStyles(
                          order.deliveryState
                        )}`}
                      >
                        {order.deliveryState}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
