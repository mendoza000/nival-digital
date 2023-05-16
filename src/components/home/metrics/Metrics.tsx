import { FiUsers, FiCode, FiTrendingUp } from "react-icons/fi";
import { useRef } from "react";
import CountUp from "react-countup";
import MetricsCard from "./MetricsCard";

const Metrics = () => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-10 px-10 py-20 bg-orange-500 shadow-xl lg:px-40 shadow-blue-200">
			<MetricsCard
				title="clientes"
				count={80}
				text="Contamos con más de 80 clientes satisfechos gracias a nuestras soluciones digitales personalizadas y eficaces."
				type="+"
				icon={<FiUsers className="w-8 h-8 text-orange-500" />}
			/>
			<MetricsCard
				title="servicios"
				count={20}
				text="Tenemos una amplia variedad de servicios digitales, más de 20, diseñados para cubrir todas las necesidades de nuestros clientes."
				type="+"
				icon={<FiCode className="w-8 h-8 text-orange-500" />}
			/>
			<MetricsCard
				title="efectividad"
				count={97}
				text="Nuestras soluciones digitales tienen una tasa de efectividad del 97%, garantizando resultados exitosos para nuestros clientes."
				type="%"
				icon={<FiTrendingUp className="w-8 h-8 text-orange-500" />}
			/>
			<p></p>
		</div>
	);
};

export default Metrics;
