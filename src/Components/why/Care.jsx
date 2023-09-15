import Image from "next/image";
import React from "react";

const Care = () => {
  return (
    <div className='md:p-36  flex flex-col md:flex-row items-center p-5   '>
      <div className='p-5 md:w-1/2'>
        <h2 className=' pb-2  text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
          Technoloy isn&#39;t the whole story
        </h2>
        <p className=''>
          Technology can support self-care and therapy through access to
          information, resources, and mental health apps, but it should not
          replace professional help or human interaction.
        </p>
      </div>
      <div className='flex flex-col gap-5   md:h-1/2'>
        <div className='bg-slate-900 max-w-prose p-5 rounded-2xl flex flex-col md:flex-row items-center  gap-3   relative overflow-hidden  md:h-44 '>
          <Image
            src='svg/feature/therapy.svg'
            width={100}
            height={100}
            alt='therapy'
            className=' '
          />
          <div>
            <h4 className='text-xl font-bold py-2'>Therapy</h4>
            <p className=''>
              Our therapy services offer a transformative journey of
              self-discovery, healing, and growth, facilitated by experienced
              professionals, dedicated to enhancing your mental and emotional
              well-being
            </p>
          </div>
        </div>
        <div className='bg-slate-900 max-w-prose p-5 rounded-2xl flex flex-col md:flex-row items-center  gap-3   relative overflow-hidden  md:h-44 '>
          <Image
            src='svg/feature/selfcare.svg'
            width={100}
            height={100}
            alt='therapy'
            className=' '
          />
          <div>
            <h4 className='text-xl font-bold py-2'>Selfcare</h4>
            <p className=' '>
              Explore personalized self-care practices, guided meditations, and
              empowering tools that foster a positive mindset, emotional
              balance, and overall wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
