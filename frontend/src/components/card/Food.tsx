import * as React from "react";
import { SameText } from "../text/text";
import { text } from "stream/consumers";

type SaleFoodCard = {
  img?: string;
  amount?: number;
  text?: string;
};

export const SaleFoodCard = (props: SaleFoodCard) => {
  return (
    <div className="w-[280px] h-[150px] border shadow-lg rounded-[16px]">
      <div className="w-full h-full rounded-[16px] relative">
        <img className="w-full h-full rounded-[16px]" src={props.img} alt="" />
      </div>
      <h1 className="font-[600]">{props.text}</h1>
      <h1 className="text-green-500 font-[600]">{props.amount}₮</h1>
    </div>
  );
};
