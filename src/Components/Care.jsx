import Image from "next/image";
import React from "react";

const Care = () => {
  return (
    <div className='md:p-36  flex flex-col md:flex-row items-center   '>
      <div className='p-5 '>
        <h2 className=' pb-2  text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
          Technoloy isn&#39;t the whole story
        </h2>
        <p className=''>
          Technology can support self-care and therapy through access to
          information, resources, and mental health apps, but it should not
          replace professional help or human interaction.
        </p>
      </div>
      <div className='flex flex-col gap-5  bg-slate-800 p-10'>
        <div>
          <Image
            src='./therapy.svg'
            width={50}
            height={50}
            alt='therapy'
            className=' '
          />
          <h4 className='text-xl font-bold py-2'>Therapy</h4>
          <p className=''>
            Our therapy services offer a transformative journey of
            self-discovery, healing, and growth, facilitated by experienced
            professionals, dedicated to enhancing your mental and emotional
            well-being
          </p>
        </div>
        <div>
          <Image
            src='./selfcare.svg'
            width={50}
            height={50}
            alt='therapy'
            className=' '
          />
          <h4 className='text-xl font-bold py-2'>Selfcare</h4>
          <p className=' '>
            Explore personalized self-care practices, guided meditations, and
            empowering tools that foster a positive mindset, emotional balance,
            and overall wellness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Care;
