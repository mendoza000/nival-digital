import About from "@/components/home/about/About";
import Advice from "@/components/home/Advice";
import Header from "@/components/home/Header";
import Metrics from "@/components/home/metrics/Metrics";
import Services from "@/components/home/services/Services";
import Testimonies from "@/components/home/testimonies/Testimonies";

export default function Home() {
	return (
		<>
			<Header />
			<Metrics />
			<div className="bg-gradient-to-tr from-blue-200 via-blue-50 to-orange-100">
				<About />
				<Services />
			</div>
			<Advice />
			<Testimonies />
		</>
	);
}
