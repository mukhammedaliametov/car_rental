import React from "react";
import Logo from "../assets/logo.svg";
import { LuChevronDown } from "react-icons/lu";
import { LuSunMedium } from "react-icons/lu";
import { MdOutlineLogin } from "react-icons/md";
import Button from './Button';

const Header = () => {
  return (
    <header className="sticky top-0 bg-[#1C1C1C] text-white h-[94px] flex items-center border-b-2 border-[#333333]">
      <div className="max-w-[1220px] w-full mx-auto px-[16px] flex items-center justify-between">
        <div className="flex items-center gap-[40px]">
          <a href="">
            <img src={Logo} alt="logo" />
          </a>
          <div className="hidden md:flex items-center gap-[20px]">
            <a href="#">Categories</a>
            <a href="#" className="flex items-center gap-[10px]">
              About Us <LuChevronDown />
            </a>
            <a href="#" className="flex items-center gap-[10px]">
              Help center <LuChevronDown />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-[25px]">
          <a href="tel: +1 855 420 0000" className="text-[18px] font-semibold hidden lg:block">+1 855 420 0000</a>
          <div className="hidden lg:block p-[14px] rounded-full bg-[#272727] text-[18px] cursor-pointer">  
            <LuSunMedium />
          </div>
          <Button name='Login' icon={<MdOutlineLogin />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
