import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/footer/Footer";
import Head from "next/head";

const Layout = ({ children }: any) => {
	return (
		<div className="bg-blue-50">
			<Head>
				<title>Nival Digital</title>
				<link rel="shortcut icon" href="/nival-logo.svg" />
			</Head>

			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
