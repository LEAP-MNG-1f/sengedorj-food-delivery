import { DessertFood } from "../foodpage/Dessert";
import { MainFood } from "../foodpage/Main";
import { SaladFood } from "../foodpage/Salad";
import { SaleFood } from "../foodpage/Sale";

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
