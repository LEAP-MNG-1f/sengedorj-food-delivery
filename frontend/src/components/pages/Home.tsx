import { RttRounded } from "@mui/icons-material";
import ActionAreaCard from "../card/Card";
import { HeaderPart } from "../Header";
import { BookIcon } from "../icons/Book";
import { Clock } from "../icons/Clock";
import { Food } from "../icons/Food";
import { FoodMenu } from "./Food";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export const HomePage = () => {
  return (
    <div>
      <HeaderPart />
      <div className="pt-[75px]">
        <Hero />
      </div>
      <div className="flex container m-auto  justify-between">
        <ActionAreaCard icons={<BookIcon />} text={"Хүргэлтийн төлөв хянах"} />
        <ActionAreaCard icons={<Clock />} text={"Шуурхай хүргэлт"} />
        <ActionAreaCard icons={<Food />} text={"Эрүүл, баталгаат орц"} />
        <ActionAreaCard icons={<BookIcon />} text={"Хоолны өргөн сонголт"} />
      </div>
      <div>
        <FoodMenu />
      </div>
      <div className="pt-[200px]">
        <Footer />
      </div>
    </div>
  );
};
