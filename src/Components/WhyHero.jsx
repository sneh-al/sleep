import Image from "next/image";
import React from "react";

const WhyHero = () => {
  return (
    <div className=' bg-1'>
      <div className='min-h-screen bg-black bg-opacity-70  md:p-36 pt-24  p-5 flex items-center justify-center gap-5 flex-wrap'>
        <div>
          <h2 className=' pb-2  text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
            The sleep you deserve
          </h2>
          <p className='font-semibold'>
            We are focusing on simple, convevient and effective solution so you
            can sleep better
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyHero;
