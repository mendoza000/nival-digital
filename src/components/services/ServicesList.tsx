import React from "react";
import ServicesListItem from "./ServicesListItem";

const ServicesList = () => {
	return (
		<div className="flex flex-wrap gap-10 cursor-default mt-7">
			<ServicesListItem
				name="inicio"
				content={[
					"Diseño de marca",
					"Diseño de feeds para redes",
					"Asesoria para redes sociales",
					"Campaña publicitaria",
				]}
				price={129.99}
				text="Ideal para pequeños negocios que necesitan destacar entre otras marcas y hacer presencia en redes"
				url={
					"https://api.whatsapp.com/send?phone=584121264718&text=Hola!%20Estoy%20interesad%40%20en%20el%20plan%20INICIO%20DIGITAL%20para%20mi%20negocio%20%F0%9F%91%8B"
				}
			/>
			<ServicesListItem
				name="ascenso"
				content={[
					"Diseño de marca",
					"Diseño de feeds para redes",
					"Asesoria para redes sociales",
					"Campaña publicitaria",
					"Creacion de sitio web o tienda virtual",
				]}
				price={279.99}
				text="La mejor opcion para negocios medianos que quieren renovar su imagen y automatizar sus ventas"
				url={
					"https://api.whatsapp.com/send?phone=584121264718&text=Hola!%20Estoy%20interesad%40%20en%20el%20plan%20ASCENSO%20DIGITAL%20para%20mi%20negocio%20%F0%9F%91%8B"
				}
			/>
			<ServicesListItem
				name="élite"
				content={[
					"Diseño de marca",
					"Diseño de feeds para redes",
					"Asesoria para redes sociales",
					"Campaña publicitaria",
					"Creacion de sitio web o tienda virtual",
					"Automatizacion den sistema de ventas",
					"Automatizacion de inventario",
				]}
				price={459.99}
				text="Perfecto para negocios que ya tienen trayectoria y necesitan trabajar para seguir creciendo como marca"
				url="https://api.whatsapp.com/send?phone=584121264718&text=Hola!%20Estoy%20interesad%40%20en%20el%20plan%20ELITE%20DIGITAL%20para%20mi%20negocio%20%F0%9F%91%8B"
			/>
		</div>
	);
};

export default ServicesList;
