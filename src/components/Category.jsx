import React, { useState } from "react";
import { carData } from "../api";
import Card from "./Card";
import Button from './Button';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredCars =
    selectedCategory === "All"
      ? carData
      : carData.filter((item) => item.category === selectedCategory);
  return (
    <div className="bg-[#1C1C1C] py-[80px]">
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
            {["All", "Sports", "Vans"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`border border-[#333333] rounded-full px-[30px] py-[12px] cursor-pointer transition 
              ${
                selectedCategory === cat
                  ? "bg-[#299764] text-white"
                  : "text-white hover:bg-[#333333]"
              }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] py-[30px]">
          {filteredCars.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                desc={item.desc}
                img={item.img}
                sets={item.sets}
                automation={item.automation}
                year={item.year}
                lit={item.lit}
              />
            );
          })}
        </div>
        <div className="flex justify-center"><Button name='View all cars' /></div>
      </div>
    </div>
  );
};

export default Category;
