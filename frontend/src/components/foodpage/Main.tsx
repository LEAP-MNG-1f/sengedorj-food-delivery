import { SaleFoodCard } from "../card/Food";
import { StarIcon } from "../icons/Star";
import { SameText } from "../text/text";

export const MainFood = () => {
  return (
    <div className="flex gap-[20px] py-[16px] flex-col ">
      <div>
        <div className="flex items-center">
          <StarIcon />
          <h1 className="font-[600] text-[20px]"> Үндсэн хоол</h1>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <div>
            <SaleFoodCard
              img="https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg"
              text="Өглөөний хоол"
              amount={5000}
            />
          </div>
        </div>
        <div>
          <SaleFoodCard
            img="https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg"
            text="Өглөөний хоол"
            amount={5000}
          />
        </div>
        <div>
          <SaleFoodCard
            img="https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg"
            text="Өглөөний хоол"
            amount={5000}
          />
        </div>
        <div>
          <SaleFoodCard
            img="https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg"
            text="Өглөөний хоол"
            amount={5000}
          />
        </div>
        <div>
          <SaleFoodCard
            img="https://t3.ftcdn.net/jpg/08/04/95/38/360_F_804953875_loZeXNzPUzewtun96e65ZJgmagdwvqvU.jpg"
            text="Өглөөний хоол"
            amount={5000}
          />
        </div>
      </div>
    </div>
  );
};
