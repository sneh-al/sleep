"use client";

import React from "react";
import Image from "next/image";

const Step = ({ feature }) => {
  return (
    <div className='bg-slate-900 max-w-prose p-5 rounded-2xl flex items-center flex-col-reverse md:flex-row gap-2   relative overflow-hidden  md:h-44 '>
      <div>
        <h4 className='font-bold text-2xl py-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
          {feature.title}
        </h4>
        <p className='font-semibold   '>{feature.description}</p>
      </div>
      <div className='   '>
        <Image
          width={250}
          height={250}
          priority={false}
          placeholder='blur'
          blurDataURL={feature.svg}
          src={feature.svg}
          alt='img'
          className=' object-cover  '
        />
      </div>
    </div>
  );
};

export default Step;
