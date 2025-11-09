import React from "react";
import sets from "../assets/sets.svg";
import automation from "../assets/automation.svg";
import years from "../assets/automation.svg";
import lit from "../assets/lit.svg";

const Card = (props) => {
  return (
    <div className="bg-[#272727] rounded-[16px] p-[20px] text-white">
      <h3 className="text-[22px] font-semibold">{props.name}</h3>
      <p>{props.desc}</p>
      <img src={props.img} alt="card1" className="my-[20px]" />
      <div className="grid grid-cols-2 gap-[20px]">
        <p className="flex items-center gap-[15px]">
          <img src={sets} alt="sets_icon" /> {props.sets}
        </p>
        <p className="flex items-center gap-[15px]">
          <img src={automation} alt="automatic" /> {props.automation}
        </p>
        <p className="flex items-center gap-[15px]">
          <img src={years} alt="years" /> {props.year}
        </p>
        <p className="flex items-center gap-[15px]">
          <img src={lit} alt="lit" /> {props.lit}
        </p>
      </div>
    </div>
  );
};

export default Card;
