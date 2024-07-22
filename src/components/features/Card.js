import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-5 h-auto py-10 rounded-lg shadow-md flex flex-col items-center dark:bg-[#001919] bg-[#F5FCFF] group relative overflow-hidden transform transition-transform duration-300 hover:border-4 hover:border-[#006b6a] hover:scale-110">
      <div className="h-72 py-4 overflow-y-hidden">
        <div className="flex flex-col gap-6">
          <span
            className="w-16 h-16 text-5xl bg-[#FFFFFF] dark:bg-black dark:hover:text-gray-100 text-[#006b6a] inline-flex items-center 
      justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#282938] cursor-pointer duration-300"
          >
            {icon}
          </span>

          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-[#282939] dark:text-gray-300">
            {title}
          </h2>
          <p className="text-xl dark:text-gray-100">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
