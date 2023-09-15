"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const GIftCard = () => {
  return (
    <div className='bg-slate-900 max-w-prose p-5 rounded-2xl flex  relative overflow-hidden '>
      <div className='absolute left-0 w-full  top-0 flex flex-wrap '>
        <Image
          src='/svg/heart.svg'
          alt='heart'
          className='rotate-45 dark:mix-blend-soft-light  w-full'
          width={100}
          height={100}
        />
      </div>
      <div className='flex justify-evenly flex-col z-10 gap-5'>
        <h4 className='text-2xl font-bold bg-clip-text bg-gradient-to-tr text-transparent from-orange-500 to-rose-300 '>
          Give away one month of Sleep Cycle premium. Just 1000&#8377;/Month.
          Cancel anytime.
        </h4>
        <div className="flex relative items-center justify-center flex-col-reverse md:flex-row">
          <Link
            href='/'
            className='px-8 py-2 bg-orange-500 rounded-3xl hover:shadow-2xl w-fit'>
            Get started today
          </Link>
          <Image
            src='./svg/gift.svg'
            alt='gift'
            className='z-10 md:absolute right-0'
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default GIftCard;
