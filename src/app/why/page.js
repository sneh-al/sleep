import { Care, Comitment, Features, WhyHero } from "@/Components";
import React from "react";

const page = () => {
  return (
    <div className='min-h-screen grid place-content-center '>
      <WhyHero />
      <Features />
      <div className='how pb-36 md:pb-0'>
        <div className='bg-black bg-opacity-70'>
          <Comitment />
          <Care />
        </div>
      </div>
    </div>
  );
};

export default page;
