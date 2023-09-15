"use client";

import React from "react";
import Image from "next/image";
import CustomeLink from "../layout/CustomeLink";
import HeroLayout from "../layout/HeroLayout";

const Hero = () => {
  return (
      <section className='relative bed'>

    <HeroLayout
    title="Helping to Get Sleep that really Matters"
      text="Experience the ultimate sleep upgrade with GetSleep, Say goodbye to
          restless nights and discover the rejuvenating power of quality rest.
          Transform your sleep, transform your life. Buy now and unlock the
          secret to a peaceful slumber."
      to="/price"
      linkTitleitle='Get Started' 
    />
   </section>
  );
};

export default Hero;
