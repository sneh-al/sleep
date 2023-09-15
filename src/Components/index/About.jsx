"use client";


import React, { useEffect } from "react";
import { animate, inView } from "motion";


import Image from "next/image";

const About = () => {
  const pClassName = "  text-white  max-w-prose ";
useEffect(() => {

 
  const imageanimation = inView(".about-section", (info) => {
        animate(
          ".img",
          { scale: [0.1, 1] },
          {
            duration: 5,
            easing: "linear",
            amoun
          },
        
        );
    }
    
    );
  return () => {
      imageanimation();
  }
}, [])

  return (
    <div className='about-section relative gap-0 min-h-screen    grid place-content-center md:grid-cols-2  md:px-36'>
      <div className=' p-5 gap-5  grid place-content-center '>
        <h2 className=' text-3xl md:text-5xl font-bold  bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-green-500 dark:to-yellow-100 '>
          We are here to provide you with the best Sleep
        </h2>
        <p className={`${pClassName} `}>
          Welcome to GetSleep, your ultimate destination for unlocking the power
          of restful sleep and extraordinary dreams. We believe that quality
          sleep is the foundation for a healthy, balanced life. Our mission is
          to empower individuals like you to optimize your sleep experience and
          harness the full potential of your dreams.
        </p>
      </div>

      <div className='img'>
        <Image
          width={1000}
          height={800}
          priority={false}
          placeholder='blur'
          blurDataURL='/next.svg'
          src='/svg/about/about-2.svg'
          alt='img'
          className='h-full w-full object-cover object-top  '
        />
        <p className='hidden'>
          <a href='https://freesvg.org/vector-illustration-of-person-sleeping'>
            Free Svg
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
