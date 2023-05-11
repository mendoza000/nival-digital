import React from "react";
import ServicesListItem from "./ServicesListItem";

const ServicesList = () => {
	return (
		<div className="grid gap-5 lg:grid-cols-2">
			<ServicesListItem
				title="Desarrollo web"
				content={[
					"Desarrollo de sitios web",
					"E-commerces",
					"Optimización de tu sitio web",
					"Actualizacion de sitios web y corrección de errores",
					"Diseño web",
				]}
			/>

			<ServicesListItem
				title="Diseño grafico"
				content={[
					"Diseño de logotipo",
					"Elementos visuales para sitios web",
					"Diseño de materiales de marketing impresos",
					"Publicaciones para redes sociales",
					"Presentaciones de diapositivas empresariales",
				]}
			/>

			<ServicesListItem
				title="Community Manager"
				content={[
					"Creación y gestión de perfiles en redes sociales",
					"Publicación regular de contenido relevante",
					"Interacción con los seguidores en las redes sociales",
					"Monitoreo y análisis de los datos",
					"Gestión de campañas publicitarias",
				]}
			/>

			<ServicesListItem
				title="Ciencias de datos"
				content={[
					"Análisis de datos para identificar tendencias",
					"Creación de modelos de predicción del mercado",
					"Análisis de datos de marketing",
					"Creación de paneles para monitorear datos",
					"Análisis de datos de rendimiento del sitio web",
				]}
			/>
		</div>
	);
};

export default ServicesList;
