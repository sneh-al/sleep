"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import MemoArrowRight from "./ArrowRight";

const CustomeLink = ({ to, title, className }) => {
  return (
    <Link
      href={to}
      className={
        "group w-fit  flex items-center  justify-between gap-2 active:animate-ping bg-slate-50  hover:bg-slate-900  px-5 py-3    border-b-2  border-t-2  hover:border-blue-500  rounded-3xl transition duration-300 ease-linear text-sm text-slate-900  hover:text-white md:text-base " +
        className
      }>
      <span className='group-hover:animate-pulse'>{title}</span>
      {/* <ArrowRightIcon className='w-4 h-4 md:w-6 md:h-6  group-hover:animate-pulse' /> */}
      {/* <Image src='/arrowright.svg' width={24} height={24} alt='arrow-right' />
       */}
      <MemoArrowRight
        className=' w-4 h-4 md:w-6 md:h-6 animate-loading  stroke-slate-900 group-hover:stroke-white  group-hover:animate-pulse '
        width='1em'
        height='1em'
      />
    </Link>
  );
};

export default CustomeLink;
