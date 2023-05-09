import React from "react";
import ServicesList from "./ServicesList";
import { FiCode } from "react-icons/fi";

const Services = () => {
	return (
		<div className="flex flex-col gap-10 px-5 py-20 lg:px-40 ">
			<h2 className="flex items-center max-w-[18rem] gap-2 pb-1 text-3xl font-bold border-b-2 border-b-orange-500">
				<FiCode className="text-orange-500" />
				¿Qué ofrecemos?
			</h2>

			<ServicesList />
		</div>
	);
};

export default Services;
