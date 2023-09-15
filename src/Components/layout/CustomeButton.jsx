"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const CustomeButton = ({ type, title, className }) => {
  return (
    <button
      onClick={() => {}}
      type={type}
      className={
        "hover:bg-slate-900  px-5 py-3 text-slate-900 bg-slate-50 bg-opacity-50 hover:text-white   border-b-2  border-t-2  hover:border-blue-500  rounded-3xl duration-300 ease-linear text-sm md:text-base font-bold btn  relative flex w-fit p-5 gap-2 items-center justify-start overflow-hidden transition-all  group" +
        className
      }>
      <span className='w-0 h-full rounded bg-gradient-to-tr from-blue-600 to-violet-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
      <span className='w-full  transition-colors duration-300 ease-in-out  z-10 '>
        {title}
      </span>
      <span className='z-10'>
        {/* <Image src='/arrowright.svg' width={24} height={24} alt='arrow-right' /> */}
      </span>
    </button>
  );
};

export default CustomeButton;
