import React from 'react';
import HeroBgImg from '../assets/hero_bg.png';
import { IoSearchSharp } from "react-icons/io5";

const Hero = () => {
    return (
        <div className='bg-[#1C1C1C]'>
        <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0 py-[20px]'>
        <div className='w-full flex justify-center flex-col items-center'>
            <img src={HeroBgImg} alt="hero_bg_img" className='rounded-[30px]' />
             <div className='w-[90%] md:w-[600px] bg-white flex items-center p-[5px] rounded-full mt-[-25px]'>
                <input type="text" placeholder='Find the car of your dreams' className='w-full outline-none px-[15px]' />
                <div className='bg-[#299764] text-white p-[15px] rounded-full text-[18px] cursor-pointer'>
                    <IoSearchSharp />
                </div>
             </div>
        </div>
        </div>
        </div>
    );
};

export default Hero;