import Image from "next/image";
import React from "react";
import { FiAward } from "react-icons/fi";
import TestimoniesCard from "./TestimoniesCard";

const Testimonies = () => {
  return (
    <div className="flex flex-col gap-20 px-5 py-32 lg:px-40" id="testimonies">
      <h2 className="flex items-center max-w-[20rem] gap-2 pb-1 text-3xl font-bold bg-opacity-50 bg-orange-400 px-2 mx-auto">
        <FiAward className="" />
        Casos de exito
        <FiAward className="" />
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-14">
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
      </div>
    </div>
  );
};

export default Testimonies;
