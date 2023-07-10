"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className='z-50 flex fixed top-0 w-full bg-black '>
      <nav className='m-auto flex items-center w-full  md:px-36  '>
        <div className='grid place-content-center p-5'>GetSleep</div>
        <ul className='hidden md:flex justify-around p-5 ml-auto '>
          {["home", "about", "why"].map((link, i) => (
            <li key={i} className='grid place-content-center'>
              <Link
                href={link === "home" ? "/" : link}
                className=' capitalize p-3 font-bold'>
                {link === "why" ? "Why us" : link}
              </Link>
            </li>
          ))}
          <li className='grid place-content-center cursor-not-allowed'>
            <button
              disabled
              className='bg-red-200 rounded-xl   p-3 text-black font-bold  hover:bg-slate-100 hover:text-slate-400'>
              Get started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
