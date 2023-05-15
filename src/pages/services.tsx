import Advice from "@/components/home/Advice";
import ServicesList from "@/components/services/ServicesList";

const services = () => {
	return (
		<div className="pb-10">
			<div className="flex flex-col items-center min-h-screen gap-4 px-10 py-20 lg:px-40">
				<h2 className="flex items-center gap-2 px-2 pb-1 text-lg font-bold text-center bg-orange-400 bg-opacity-50">
					Nuestros servicios
				</h2>

				<span className="text-4xl font-bold text-center">
					Trabajamos contigo para impulsar tu negocio
					<p className="text-orange-400">Selecciona tu plan</p>
				</span>

				<p className="opacity-70">
					Tenemos diversos planes creados para ti ajustados a los requerimientos
					mas comunes de nuestros clientes
				</p>

				<ServicesList />
			</div>
			<Advice />
		</div>
	);
};

export default services;
