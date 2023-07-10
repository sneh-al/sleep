import Image from "next/image";
import React from "react";

const Teamup = () => {
  return (
    <div className='flex bg-slate-800 p-5 md:p-36   '>
      <div className='flex flex-col md:flex-row'>
        <h2 className='mb-10 pb-2  text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
          We are Team up with OpenAI to deliver effective sleep
        </h2>

        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
          alt='openai'
          width={300}
          height={300}
          className='text-inherit'
        />
      </div>
    </div>
  );
};

export default Teamup;
