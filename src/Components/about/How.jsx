"use client";
import React from "react";
import Step from "../Step";

const How = () => {
  return (
    <div className='how '>
      <div className='bg-black bg-opacity-70 pb-10'>
        <div className='bg-black py-24  mb-5 p-5 '>
          <h2 className='md:px-36    text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
            How We Do It
          </h2>
        </div>
        <div className='p-5 md:px-36 md:py-24   grid gap-5 grid-cols-1 md:grid-cols-2'>
          {features.map((feature, i) => (
            <Step key={i} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default How;

const features = [
  {
    title: "Scientifically Grounded Approach",
    description:
      "We believe in the importance of scientific research and evidence-based methods.",
    svg: "svg/features/science.svg",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We leverage cutting-edge technology to create a seamless and personalized sleep experience.",
    svg: "svg/features/technology.svg",
  },

  {
    title: "Personalized Sleep Solutions",
    description:
      "GetSleep provides personalized sleep solutions tailored to your specific preferences and requirements.",
    svg: "svg/features/personnalized.svg",
  },
  {
    title: "Community Support",
    description:
      "Connect with like-minded sleep enthusiasts, share experiences, and gain valuable insights and support.",
    svg: "svg/features/community.svg",
  },
];
