import Image from "next/image";
import React from "react";
import { FiAward } from "react-icons/fi";
import TestimoniesCard from "./TestimoniesCard";

const Testimonies = () => {
	return (
		<div className="px-5 py-20 lg:px-40" id="testimonies">
			<div className="flex flex-col gap-10 px-5 py-20 bg-white rounded-sm shadow-xl">
				<h2 className="flex items-center justify-center max-w-xs gap-1 pb-1 mx-auto text-3xl font-bold text-center border-b-2 border-b-orange-500">
					<FiAward className="text-orange-500" />
					Casos de exito
					<FiAward className="text-orange-500" />
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-5">
					<TestimoniesCard />
					<TestimoniesCard />
					<TestimoniesCard />
				</div>
			</div>
		</div>
	);
};

export default Testimonies;
