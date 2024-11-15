import { LaalIcon } from "../icons/Laal";

export const Hero = () => {
  return (
    <div className=" bg-green-500 ">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card  rounded-box grid  flex-grow place-items-center bg-green-500 h-[800px]">
          <LaalIcon />
        </div>
      </div>
    </div>
  );
};
