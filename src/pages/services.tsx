import Advice from "@/components/home/Advice";
import Buttons from "@/components/services/Buttons";
import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesList from "@/components/services/ServicesList";

const services = () => {
	return (
		<div className="flex flex-col min-h-screen py-20 gap-14 ">
			<ServicesHeader />
			<ServicesList />

			<Buttons />

			<Advice />
		</div>
	);
};

export default services;
