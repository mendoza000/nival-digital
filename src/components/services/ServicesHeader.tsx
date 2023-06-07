import React from "react";

const ServicesHeader = () => {
	return (
		<div className="flex flex-col items-center gap-4 px-10">
			<h2 className="flex items-center gap-2 px-2 pb-1 text-lg font-bold text-center bg-orange-400 bg-opacity-50">
				Nuestros servicios
			</h2>

			<span className="text-4xl font-bold text-center">
				Trabajamos contigo para impulsar tu negocio
				<p className="text-orange-400">Selecciona tus servicios</p>
			</span>

			<p className="text-center opacity-70">
				Tenemos diversos servicios creados para ti ajustados a los
				requerimientos mas comunes de nuestros clientes
			</p>
		</div>
	);
};

export default ServicesHeader;
