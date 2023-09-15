"use client"
import React, { useEffect } from 'react'
import CustomeLink from './CustomeLink';
import { animate, scroll } from "motion";


const HeroLayout = ({ title, text, to, linkTitle }) => {
  useEffect(() => {
  const titleAnimation = 
    animate(
      ".hero-title",
      { y: [0, -10, 0] },
      {
        duration: 3,
        offset: [0, 0.25, 0.75],
    
      }
    )
  
 
     const pAnimation = animate(
       ".hero-p",
       { opacity: [0, 0.5, 1] },
       {
         duration: 5,
       }
    );
    
  const btnAnimation = 
    animate(
      ".hero-btn",
      { scale: [0.6, 1] },
      {
        duration: 1,
      }
    )
  
     
    return (() => {
    titleAnimation.stop()
    pAnimation.stop();
    btnAnimation.stop();
  })
  }, []);
  return (
    <div className='flex pt-24 bg-black bg-opacity-70    justify-evenly  items-center  min-h-screen p-5 md:p-36 md:pb-0 flex-col-reverse md:flex-row   '>
      <div className='  z-10   flex flex-col items-left   gap-5  max-w-prose'>
        <h2 className='hero-title  text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
          {title}
        </h2>
        <p className='hero-p  text-white'>
                  { text}
        </p>

        <CustomeLink to="#" title='Get Started' />
      </div>
    </div>
  );
}

export default HeroLayout