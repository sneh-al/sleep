import Image from "next/image";
import React from "react";
import CustomeButton from "./CustomeButton";
import CustomeLink from "./CustomeLink";

const Choice = () => {
  return (
    <div className='bg-slate-900 flex flex-col items-center  p-10 md:flex-row md:p-36 justify-evenly '>
      <div className=''>
        <Image
          src='./choice.svg'
          width={400}
          height={400}
          alt='choice'
          className=' '
        />
      </div>

      <div className='flex flex-col gap-5 max-w-prose'>
        <h4 className=' text-3xl md:text-5xl font-bold  bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-green-500 dark:to-yellow-100'>
          The right choice can make all diffrence
        </h4>
        <p className=' '>
          With GetSleep, you&#39;ll experience a transformation in your sleep
          quality, wake up feeling refreshed and rejuvenated, and gain a deeper
          understanding of the incredible world of dreams.
        </p>
        <CustomeLink
          className='hover:bg-slate-900  px-5 py-3 text-slate-900 bg-slate-50 bg-opacity-50 hover:text-white   border-b-2  border-t-2  hover:border-blue-500  rounded-3xl transition duration-300 ease-linear text-sm md:text-base font-bold'
          title='See What make us diffrent'
          to='/'
        />
      </div>
    </div>
  );
};

export default Choice;
