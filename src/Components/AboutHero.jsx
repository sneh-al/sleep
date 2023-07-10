"use client";

import Image from "next/image";

const AboutHero = () => {
  return (
    <div className='  bg-1    '>
      <div className='min-h-screen pt-24  bg-black bg-opacity-70 h-full md:p-36  flex md:flex-row flex-col items-center justify-center relative gap-5 '>
        <div className='grow-1 max-w-2xl '>
          <h2 className=' pb-2 text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
            Delivering life changing sleep with dream storage and lucid dream
            controll
          </h2>
          <p className=' font-semibold mt-10 '>
            Welcome to GetSleep, where the power of restful sleep and
            extraordinary dreams converge. Our mission is to empower individuals
            like you to achieve optimal sleep and unlock the transformative
            potential within your dreams. At GetSleep, we are committed to
            revolutionizing the way you sleep and enhancing your overall
            well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
