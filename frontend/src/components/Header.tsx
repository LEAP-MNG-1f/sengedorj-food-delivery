import { PineIcon } from "./icons/Pinecone";
import { SameText } from "./text/text";
import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

export const HeaderPart = () => {
  return (
    <div className="container m-auto pt-[50px] flex">
      <div className="flex w-[50%] justify-between items-center pr-[100px] ">
        <PineIcon />
        <SameText name={"НҮҮР"} />
        <SameText name={"ХООЛНЫ ЦЭС"} />
        <SameText name={"ХҮРГЭЛТИЙН БҮС"} />
      </div>
      <div className="w-[50%]  flex justify-between pl-[100px] items-center pr-[40px]">
        <input type="search" className="border w-[300px]" />
        <div className="flex gap-[5px]">
          <ShoppingCartIcon />
          <SameText name={"сагс"} />
        </div>
        <div className="flex">
          <PersonIcon />
          <SameText name={"Нэвтрэх"} />
        </div>
      </div>
    </div>
  );
};
