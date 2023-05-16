import React from "react";
import ServicesListItem from "./ServicesListItem";

const ServicesList = () => {
	return (
		<div className="grid gap-5 lg:grid-cols-2">
			<ServicesListItem
				title="Desarrollo web"
				content={[
					"Desarrollo de sitios web",
					"Tiendas virtuales",
					"Optimización de tu sitio web y corrección de errores",
					"Diseño web",
				]}
			/>

			<ServicesListItem
				title="Diseño grafico"
				content={[
					"Diseño de marca",
					"Elementos visuales para sitios web",
					"Campañas publicitarias",
					"Identidad visual y corporativa",
				]}
			/>

			<ServicesListItem
				title="Community Manager"
				content={[
					"Planificacion de contenido",
					"Establecimiento de relaciones",
					"Gestion de campañas publicitarias",
					"Gestion de redes sociales",
				]}
			/>

			<ServicesListItem
				title="Ciencias de datos"
				content={[
					"Análisis de datos para identificar tendencias",
					"Creación de modelos de predicción del mercado",
					"Análisis de datos de marketing",
					"Análisis de datos de rendimiento del sitio web",
				]}
			/>
		</div>
	);
};

export default ServicesList;
