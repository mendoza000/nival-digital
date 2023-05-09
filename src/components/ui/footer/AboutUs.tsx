import React from "react";
import { FiLink2 } from "react-icons/fi";

const AboutUs = () => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-bold uppercase border-b-2 border-b-orange-500 max-w-[5rem]">
				Nostros
			</h4>

			<div className="flex flex-col gap-2">
				<a
					href="#"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
				>
					<FiLink2 />
					¿Quienes somos?
				</a>

				<a
					href="#"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
				>
					<FiLink2 />
					Nuestra misión
				</a>

				<a
					href="#"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
				>
					<FiLink2 />
					Servicios
				</a>

				<a
					href="#"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
				>
					<FiLink2 />
					Solicitar asesoria
				</a>
			</div>
		</div>
	);
};

export default AboutUs;
