import { useConfigStore } from "@/store/config";
import { useServicesStore } from "@/store/services";
import React from "react";
import { shallow } from "zustand/shallow";

const Buttons = () => {
	const servicesList = useServicesStore((state) => state.servicesList);
	const cleanServices = useServicesStore((state) => state.cleanServices);

	const handleClean = () => cleanServices();

	return (
		<div className="flex gap-5 px-10 my-7 lg:px-40">
			<a
				target="_blank"
				href={`https://api.whatsapp.com/send?phone=584121264718&text=Hola!%20Estoy%20interesado%20en%20los%20servicios%20de%20'${servicesList.join(
					",%20"
				)}'%20.%20Dame%20más%20información%20sobre%20estos`}
				className="px-8 py-4 text-lg font-semibold text-white duration-200 bg-orange-400 shadow-xl rounded-xl hover:bg-orange-500"
			>
				Solicitar servicios
			</a>
			<button
				className="px-8 py-4 text-lg font-semibold text-orange-400 duration-200 bg-transparent border-2 border-orange-400 shadow-xl rounded-xl hover:bg-orange-100"
				onClick={handleClean}
			>
				Limpiar
			</button>
		</div>
	);
};

export default Buttons;
