import React from "react";

const Withus = () => {
  return (
    <div className=' withus    '>
      <div className='flex flex-wrap md:p-36 bg-black bg-opacity-70'>
        <div className='p-5  '>
          <h2 className='text-left pb-2 text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
            We are delivering life changing care
          </h2>
          <p className=' max-w-prose '>
            We&#39;ve redefined sleep care from ground up so that everyone can
            get great care, wherever they are{" "}
          </p>
          <p className='  '>
            If you are passionate about sleep, we'd love to hear from you.
          </p>
        </div>
        <div className='w-full md:w-fit p-6 flex flex-col justify-center  '>
          <p className='flex flex-col  font-semibold '>
            Carear{" "}
            <a href='mailto:team@getsleep.com' className='underline'>
              team@getsleep.com
            </a>
          </p>
          <p className='flex flex-col  font-semibold '>
            Support{" "}
            <a href='mailto:support@getsleep.com' className='underline'>
              support@getsleep.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Withus;
