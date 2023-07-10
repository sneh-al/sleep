"use client";

import React from "react";
import Image from "next/image";
import CustomeLink from "./CustomeLink";

const Hero = () => {
  return (
    <div className='flex pt-24 bg-black bg-opacity-70    justify-evenly  items-center  min-h-screen p-5 md:p-36 md:pb-0 flex-col-reverse md:flex-row   '>
      <div className='  z-10   flex flex-col items-left   gap-5  max-w-prose'>
        <h2 className='  text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
          Helping to Get Sleep that really Matters
        </h2>
        <p className='  text-white'>
          Experience the ultimate sleep upgrade with GetSleep, Say goodbye to
          restless nights and discover the rejuvenating power of quality rest.
          Transform your sleep, transform your life. Buy now and unlock the
          secret to a peaceful slumber.
        </p>

        <CustomeLink to='/price' title='Get Started' />
      </div>

      {/* <div className='     '>
        <Image
          width={800}
          height={300}
          priority={false}
          placeholder='blur'
          blurDataURL='/next.svg'
          src='/bed.png'
          alt='img'
          className=' '
        />
        <p className='hidden'>
          <a href='https://freesvg.org/vector-illustration-of-person-sleeping'>
            Free Svg
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default Hero;
