import About from "@/components/home/about/About";
import Advice from "@/components/home/Advice";
import Header from "@/components/home/Header";
import Metrics from "@/components/home/metrics/Metrics";
import Services from "@/components/home/services/Services";
import Testimonies from "@/components/home/testimonies/Testimonies";
import Footer from "@/components/ui/footer/Footer";
import Navbar from "@/components/ui/Navbar";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Header />
			<Metrics />
			<About />
			<Services />
			<Advice />
			<Testimonies />
		</>
	);
}
