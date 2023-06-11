import Link from "next/link";
import React from "react";
import { FiLink2 } from "react-icons/fi";

const AboutUs = () => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-bold uppercase border-b-2 border-b-orange-500 max-w-[5rem]">
				Nostros
			</h4>

			<div className="flex flex-col gap-2">
				<Link
					href="/#about"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
				>
					<FiLink2 />
					¿Quienes somos?
				</Link>

				<Link
					href="/#about"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
				>
					<FiLink2 />
					Nuestra misión
				</Link>

				<Link
					href="/services"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
				>
					<FiLink2 />
					Servicios
				</Link>

				<a
					href="https://api.whatsapp.com/send?phone=584121264718&text=Hola!%20Me%20gustar%C3%ADa%20tener%20una%20asesor%C3%ADa%20personalizada%20para%20mi%20negocio%20%F0%9F%91%8B"
					target="_blank"
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
