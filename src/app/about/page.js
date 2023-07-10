"use client";

import React from "react";
import { About, AboutHero, How, Teamup, Withus } from "@/Components";
import Image from "next/image";

const page = () => {
  return (
    <div className=' '>
    <AboutHero />
      <How />
      <Teamup />
      <Withus />
    </div>
  );
};

export default page;
