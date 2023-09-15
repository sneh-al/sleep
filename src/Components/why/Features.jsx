"use client";
import React from "react";
import Feature from "../layout/Feature";

const Features = () => {
  return (
    <div className=' withus'>
      <div className='bg-black bg-opacity-70  pb-10'>
        <div className='bg-black p-24 md:px-36 mb-10 '>
         
          <h2 className=' text-3xl md:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-100'>
            Features
          </h2>
        </div>
        <div className='p-5 md:mx-36 md:py-20 grid md:grid-cols-2 gap-5'>
          {features.map((feature, i) => (
            <Feature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

var features = [
  {
    name: "Fast Delivery",
    description:
      "We understand the importance of prompt access to your dreams. With Ast Sleep, you can achieve lucid dreaming faster than ever before.",
    svg: "svg/feature/Fast.svg",
  },
  {
    name: "Dream Storage",
    description:
      "Never lose a precious dream memory again. Ast Sleep offers Dream Storage, a secure and personalized cloud-based repository for all your dreams.",
    svg: "svg/feature/storage.svg",
  },
  {
    name: "Lucid Dream Full Control",
    description:
      "Unlock the power of your subconscious mind with Lucid Dream Full Control. Ast Sleep utilizes cutting-edge neurofeedback technology to help you achieve lucidity within your dreams. ",
    svg: "svg/feature/control.svg",
  },
  {
    name: "Webiarte Integration",
    description:
      "Ast Sleep seamlessly integrates with Webiarte, a popular online dream journal and lucid dreaming community. Share your dream experiences, exchange tips and techniques with fellow dream enthusiasts, and embark on collective dream adventures.",
    svg: "svg/feature/Journal.svg",
  },
  {
    name: "Reality Checks",
    description:
      "Improve your chances of achieving lucidity with Reality Checks. Ast Sleep provides built-in reminders and techniques to help you question and confirm whether you are dreaming or awake, increasing your awareness and potential for lucid dreaming.",
    svg: "svg/feature/reality.svg",
  },
  {
    name: "Dream Statistics",
    description:
      "Track and analyze your dreaming patterns with Dream Statistics. Ast Sleep compiles valuable data about your dreams, including frequency, duration, and recurring themes. ",
    svg: "svg/feature/statics.svg",
  },
];
