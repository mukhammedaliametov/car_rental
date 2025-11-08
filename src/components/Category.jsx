import React from "react";
import Car1 from "../assets/card1.png";
import sets from "../assets/sets.svg";
import automation from "../assets/automation.svg";
import years from "../assets/automation.svg";
import lit from "../assets/lit.svg";

const Category = () => {
  return (
    <div className="bg-[#1C1C1C] pt-[80px]">
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0">
        <div className="w-full md:w-[575px] mx-auto text-center text-white">
          <h2 className="text-[22px] md:text-[36px] font-semibold">
            Choose the car of your dreams
          </h2>
          <p className="mt-[10px]">
            We provide our customers with the most incredible driving emotions.
            That is why there are only world-class cars in our fleet
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex gap-[20px] mt-[30px]">
            <button className="border border-[#333333] text-white rounded-full px-[30px] py-[12px] cursor-pointer">All</button>
            <button className="border border-[#333333] text-white rounded-full px-[30px] py-[12px] cursor-pointer">Sport</button>
            <button className="border border-[#333333] text-white rounded-full px-[30px] py-[12px] cursor-pointer">Vans</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] py-[30px]">
          <div className="bg-[#272727] rounded-[16px] p-[20px] text-white">
            <h3 className="text-[22px] font-semibold">Ford Fiesta</h3>
            <p>Economy Car</p>
            <img src={Car1} alt="card1" className="my-[20px]" />
            <div className="grid grid-cols-2 gap-[20px]">
              <p className="flex items-center gap-[15px]">
                <img src={sets} alt="sets_icon" /> 5 Seats
              </p>
              <p className="flex items-center gap-[15px]">
                <img src={automation} alt="automatic" /> Automatic
              </p>
              <p className="flex items-center gap-[15px]">
                <img src={years} alt="years" /> 21 years
              </p>
              <p className="flex items-center gap-[15px]">
                <img src={lit} alt="lit" /> 1-lit / 2.5 km
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
