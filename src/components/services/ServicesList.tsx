import React, { useState } from "react";
import ServicesDepartment from "./ServicesDepartment";
import { useConfigStore } from "@/store/config";
import { shallow } from "zustand/shallow";

const ServicesList = () => {
	const servicesList = useConfigStore((state) => state.servicesList);

	return (
		<div className="flex flex-col gap-20 px-10 cursor-default mt-7 lg:px-40">
			<ServicesDepartment
				name="Programación"
				servicesList={servicesList}
				services={[
					"Desarrollo de sitios web personalizados",
					"Desarrollo de tienda en linea",
					"Diseño web",
					"Sistema de inventario",
					"Mantenimiento para pagina web",
					"Optimización de sitio web",
					"Sistemas de gestión de contenido (CMS)",
					"Desarrollo de blogs",
					"Desarrollo de landing pages",
					"Implementacion de bases de datos",
				]}
			/>
			<ServicesDepartment
				name="Diseño grafico"
				servicesList={servicesList}
				services={[
					"Diseño de logotipos y branding corporativo",
					"Diseño de material promocional y publicitario",
					"Diseño de banners y anuncios digitales",
					"Diseño de presentaciones y materiales de marketing",
					"Diseño de folletos, catálogos y material impreso",
					"Diseño de packaging y etiquetas",
					"Creación de ilustraciones y personajes personalizados",
				]}
			/>
			<ServicesDepartment
				name="Comunnity Manager"
				servicesList={servicesList}
				services={[
					"Gestion de contenido para redes",
					"Estrategias de marketing en redes sociales",
					"Interacción y atención al cliente en redes sociales",
					"Creación y gestión de campañas publicitarias en redes sociales",
					"Gestión de influenciadores y colaboraciones",
					"Estrategias de crecimiento y aumento de seguidores en redes sociales",
					"Gestión de reputación en línea y manejo de crisis",
				]}
			/>
			<ServicesDepartment
				name="Ciencia de datos"
				servicesList={servicesList}
				services={[
					"Modelado y predicción de comportamientos",
					"Minería de datos y descubrimiento de patrones",
					"Análisis de sentimientos y opiniones en línea",
					"Visualización de datos y dashboards interactivos",
					"Análisis de competidores y mercado",
					"Automatización de informes y procesos analíticos",
					"Consultoría y asesoramiento en estrategias basadas en datos",
				]}
			/>
		</div>
	);
};

export default ServicesList;
