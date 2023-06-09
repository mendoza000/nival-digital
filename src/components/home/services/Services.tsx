import React from "react";
import ServicesList from "./ServicesList";
import { FiCode } from "react-icons/fi";

const Services = () => {
  return (
    <div className="flex flex-col gap-10 px-5 py-40 pt-10 lg:px-40">
      <h2 className="flex items-center max-w-[20rem] gap-2 pb-1 text-3xl font-bold bg-opacity-50 bg-orange-400 px-2">
        <FiCode className="" />
        ¿Qué ofrecemos?
      </h2>

      <ServicesList />
    </div>
  );
};

export default Services;
