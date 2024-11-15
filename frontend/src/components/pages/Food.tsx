import { SaleFoodCard } from "../card/Food";
import { SaleFood } from "../foodpage/Sale";
import { DessertFood } from "../foodpage/Dessert";
import { MainFood } from "../foodpage/Main";
import { SaladFood } from "../foodpage/Salad";

export const FoodMenu = () => {
  return (
    <div className="pt-[50px] container m-auto flex flex-col gap-[100px]">
      <SaleFood />
      <MainFood />
      <SaladFood />
      <DessertFood />
    </div>
  );
};
