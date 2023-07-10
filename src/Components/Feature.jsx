"use client";

import React from "react";
import Image from "next/image";

const Feature = ({ feature }) => {
  return (
    <div className='p-5 flex bg-slate-800 rounded-2xl items-center gap-3 '>
      <div>
        <h4 className='font-bold text-xl py-2'>{feature.name}</h4>
        <p className='  '>{feature.description}</p>
      </div>
      <div className='grow-1   '>
        <Image
          width={500}
          height={500}
          priority={false}
          placeholder='blur'
          blurDataURL='/next.svg'
          src={feature.svg}
          alt='img'
          className=' object-cover  '
        />
      </div>
    </div>
  );
};

export default Feature;
