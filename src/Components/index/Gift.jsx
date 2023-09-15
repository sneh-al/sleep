"use client";
import React from "react";

import GIftCard from "./GIftCard";

const Gift = () => {
  return (
    <div className=' bg-1 '>
      <div className='flex flex-col gap-5 place-content-center bg-black p-5 md:p-36  py-24 bg-opacity-70 '>
        <h2 className='title pb-2 text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
          Helping to Get Sleep that really Matters
        </h2>
        <p className=' font-semibold max-w-prose '>
          Experience the ultimate sleep upgrade with GetSleep, Say goodbye to
          restless nights and discover the rejuvenating power of quality rest.
          Transform your sleep, transform your life. Buy now and unlock the
          secret to a peaceful slumber.
        </p>
        <div className='flex gap-3 flex-wrap hero-btn'>
          <GIftCard />
        </div>
      </div>
    </div>
  );
};

export default Gift;
