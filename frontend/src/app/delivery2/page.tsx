"use client";
import { HeaderPart } from "@/components/Header";
import { Footer } from "@/components/pages/Footer";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeaderPart />
      <div className="container mx-auto p-6 pt-[100px]">
        <div className=" rounded-lg  mb-6 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119144.83940302734!2d106.75185959468295!3d47.88639843539851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96929f21c4c285%3A0xfefdd7f982c0df3f!2sUlaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2smn!4v1693145957697!5m2!1sen!2smn"
            title="Ulaanbaatar Map"
            width="100%"
            height="600"
            className="rounded-md"
            loading="lazy"
          ></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">
          🚚 Хүргэлтийн бүс дэх хаягууд
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold  mb-2">A бүс</h4>
            <div className="w-full border border-green-400"></div>
            <ul className="list-disc list-inside space-y-1 pt-[10px] flex gap-[20px] items-cente ">
              <div>
                <li>Баянмонгол хороолол</li>
                <li>26-р байр</li>
                <li>45-р байр</li>
                <li>3-р байр</li>
                <li>Хан-Уул хотхон</li>
              </div>
              <div>
                <li>Баянмонгол хороолол</li>
                <li>26-р байр</li>
                <li>45-р байр</li>
                <li>3-р байр</li>
                <li>Хан-Уул хотхон</li>
              </div>
            </ul>
          </div>

          <div className="border rounded-lg shadow-md p-4">
            <h4 className="text-lg font-semibold t mb-2">B бүс</h4>
            <div className="w-full border border-green-400"></div>
            <ul className="list-disc list-inside space-y-1 pt-[10px]">
              <li>Зайсан</li>
              <li>Номун вилла</li>
              <li>Ривер Гарден</li>
              <li>Шинэ төгөл</li>
              <li>Time Square хотхон</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
