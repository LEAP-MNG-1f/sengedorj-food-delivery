"use client";
import { HeaderPart } from "../Header";
import { Footer } from "./Footer";
import * as React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { SaladFood } from "../foodpage/Salad";
import { DessertFood } from "../foodpage/Dessert";

export const FoodMenuua = () => {
  return (
    <div>
      <HeaderPart />
      <div className=" container m-auto pt-[100px] pb-[40px]">
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" className="w-[25%]">
            Breakfast
          </Button>
          <Button className="w-[25%]" variant="outlined">
            Soup
          </Button>
          <Button className="w-[25%]" variant="outlined">
            Main Course
          </Button>
          <Button className="w-[25%]" variant="outlined">
            Dessert
          </Button>
        </Stack>
      </div>
      <SaladFood />
      <DessertFood />
      <Footer />
    </div>
  );
};
