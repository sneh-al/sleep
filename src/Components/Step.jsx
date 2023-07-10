"use client";

import React from "react";
import Image from "next/image";

const Step = ({ feature }) => {
  return (
    <div className='p-5 flex bg-slate-800 rounded-2xl  '>
      <div>
        <h4 className='font-bold text-xl'>{feature.title}</h4>
        <p className='font-semibold   '>{feature.description}</p>
      </div>
      <div className='   '>
        <Image
          width={200}
          height={200}
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
