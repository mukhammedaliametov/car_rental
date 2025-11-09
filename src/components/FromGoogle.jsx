import React from "react";
import googleIcon from "../assets/google_logo.svg";
import rgbLine from "../assets/rgb_line.svg";
import Avatar from "../assets/avatar.png";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const FromGoogle = () => {
  return (
    <div className="hidden lg:block bg-[#272727] py-[60px] px-[16px] xl:px-0">
      <div className="max-w-[1220px] mx-auto rounded-[20px] overflow-hidden flex items-center text-white">
        <div className="bg-[#1C1C1C] w-[40%] p-[50px] h-[480px]">
          <div className="flex items-center gap-[10px]">
            <img src={googleIcon} alt="google_icon" />
            <p className="text-blue-600">From Google</p>
          </div>
          <h3 className="text-[38px]/[49px] font-[500] py-[35px]">
            Hear what the <br /> community is <br /> saying
          </h3>
          <img src={rgbLine} alt="rgb_line" className="mb-[30px]" />
          <p>More interesting reviews on Instagram</p>
          <button className="relative cursor-pointer inline-flex items-center justify-center py-[18px] px-[50px] rounded-full mt-[20px] font-semibold overflow-hidden">
            <span
              className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#F9ED32] via-[#EE2A7B] via-[#8B2AB2] to-[#002AFF]"
              aria-hidden="true"
            ></span>
            <span className="absolute inset-[2px] rounded-full bg-white"></span>
            <span className="relative bg-gradient-to-r from-[#F9ED32] via-[#EE2A7B] via-[#8B2AB2] to-[#002AFF] bg-clip-text text-transparent">
              Instagram
            </span>
          </button>
        </div>
        <div className="flex flex-col justify-between gap-[20px] w-[60%] py-[60px] bg-[#299764] h-[480px] pl-[40px]">
          <div className="flex flex-col justify-between bg-[#1C1C1C] rounded-[16px] w-[420px] h-[330px] p-[20px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <img src={Avatar} alt="avatar" />
                <div>
                  <h3>Savannah Nguyen</h3>
                  <p className="text-[14px]">savannahnguyen@gmail.com</p>
                </div>
              </div>
              <img src={googleIcon} alt="google_icon" />
            </div>
            <p className="text-[14px] py-[10px]">
              Sagittis sed tortor, elementum vitae varius sodales consectetur.
              Vitae arcu ut morbi bibendum ullamcorper feugiat. Venenatis
              hendrerit cursus egestas sit ornare nunc vulputate aliquam sapien.
              Pulvinar nunc consectetur nibh consectetur mollis mauris est
              mauris amet. Sed hac vehicula id et dui morbi quam pulvinar
              condimentum. Senectus sed varius interdum nunc, arcu vulputate
              massa.
            </p>
            <div className="flex items-center gap-[15px] border-t-[1.5px] pt-[12px] border-[#333333]">
              <p>Star rating:</p>
              <div className="flex items-center gap-[5px]">
                <FaStar className="text-[#299764]" />
                <FaStar className="text-[#299764]" />
                <FaStar className="text-[#299764]" />
                <FaStar className="text-[#299764]" />
                <FaStar className="text-[#299764]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="w-[540px] h-[2px] bg-[#fff]"></div>
            <div className='flex items-center gap-[10px]'>
              <span className="p-[12px] rounded-full text-[18px] bg-white text-[#299764] cursor-pointer">
                <FaChevronLeft />
              </span>
              <span className="p-[12px] rounded-full text-[18px] bg-white text-[#299764] cursor-pointer">
                <FaChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromGoogle;
