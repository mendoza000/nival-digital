import React from "react";

const Advice = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-5 px-10 py-20 text-white bg-orange-500 lg:px-40">
			<h3 className="text-3xl font-bold text-center">
				¿Necesitas algo mas personalizado?
			</h3>
			<p className="max-w-md text-center">
				Puedes contactarnos para realizar una asesoria sobre tu negoció y asi
				darte un servicio que se adapte a sus necesidades
			</p>
			<button className="max-w-sm px-10 py-3 font-semibold text-orange-500 uppercase duration-200 bg-white shadow-xl hover:opacity-90">
				Solicitar asesoria
			</button>
		</div>
	);
};

export default Advice;
