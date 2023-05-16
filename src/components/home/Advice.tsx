import React from "react";

const Advice = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-full gap-5 px-10 py-20 text-white bg-orange-500 shadow-xl lg:px-40 shadow-blue-200">
			<h3 className="text-3xl font-bold text-center">
				¿Necesitas algo mas personalizado?
			</h3>
			<p className="max-w-md text-center">
				Puedes contactarnos para realizar una asesoria sobre tu negoció y asi
				darte un servicio que se adapte a sus necesidades
			</p>
			<a
				href="https://api.whatsapp.com/send?phone=584121264718&text=Hola!%20Me%20gustar%C3%ADa%20tener%20una%20asesor%C3%ADa%20personalizada%20para%20mi%20negocio%20%F0%9F%91%8B"
				target="_blank"
				className="max-w-sm px-10 py-4 font-semibold text-orange-500 uppercase duration-200 bg-white shadow-xl hover:opacity-90 rounded-xl"
			>
				Solicitar asesoria
			</a>
		</div>
	);
};

export default Advice;
