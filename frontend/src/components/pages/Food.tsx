// import { DessertFood } from "../foodpage/Dessert";
// import { MainFood } from "../foodpage/Main";
// import { SaladFood } from "../foodpage/Salad";
// import { SaleFood } from "../foodpage/Sale";
import { StarIcon } from "../icons/Star";

export const FoodMenu = () => {
  return (
    <div className="pt-[50px] container m-auto flex flex-col gap-[100px]">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <StarIcon />
          <h1 className="font-bold text-2xl text-gray-800">Хямдралтай</h1>
        </div>
        {/* <SaleFood /> */}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <StarIcon />
          <h1 className="font-bold text-2xl text-gray-800">Үндсэн хоол</h1>
        </div>
        {/* <MainFood /> */}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <StarIcon />
          <h1 className="font-bold text-2xl text-gray-800">Салад ба зууш</h1>
        </div>
        {/* <SaladFood /> */}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <StarIcon />
          <h1 className="font-bold text-2xl text-gray-800">Амттан</h1>
        </div>
        {/* <DessertFood /> */}
      </div>
    </div>
  );
};
