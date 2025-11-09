import React from 'react';

const Button = ({name, icon}) => {
    return (
        <button className="py-[15px] px-[26px] cursor-pointer rounded-full bg-[#299764] text-white flex items-center gap-[5px]">
                    {name} {icon == undefined ? '' : <span className='text-[20px]'>{icon}</span>}
                  </button>
    );
};

export default Button;