import React, { useRef, useEffect } from "react";
import ReactTyped from "react-typed";
// import { text } from "stream/consumers";

const Header = () => {
	const textsSolutions = [
		"Desarrollo web",
		"Branding",
		"Diseño grafico",
		"Community manager",
		"Ciencia de datos",
	];

	const textsAreas = ["Empresa", "Marca", "Negocio"];

	return (
		<header className="flex flex-col-reverse items-center min-h-screen gap-10 px-10 py-20 lg:grid lg:py-0 lg:grid-cols-2 lg:px-40 bg-blue-50">
			{/* <div className="absolute z-0 bottom-5 right-5 min-w-[30rem] min-h-[7rem] bg-orange-300 blur-[12rem]"></div> */}
			<div className="flex flex-col gap-4 -mt-20 lg:mt-0">
				<span className="max-w-[12rem] text-sm font-semibold border-b-2 opacity-70 border-b-orange-500 uppercase">
					Construyendo tu futuro
				</span>
				<h1 className="text-4xl font-extrabold tracking-wider uppercase">
					Nival digital
				</h1>

				<p className="max-w-md text-xl font-semibold opacity-80">
					Eleva tu presencia digital con nuestras soluciones de{" "}
					<ReactTyped
						strings={textsSolutions}
						typeSpeed={60}
						className="font-bold bg-orange-500 bg-opacity-50"
						backSpeed={60}
						backDelay={5000}
						loop
					/>{" "}
					a medida para tu{" "}
					<ReactTyped
						strings={textsAreas}
						typeSpeed={60}
						className="font-bold bg-orange-500 bg-opacity-50"
						backSpeed={60}
						backDelay={5000}
						loop
					/>
				</p>

				<button className="max-w-sm px-3 py-3 mt-5 font-semibold uppercase duration-200 bg-orange-500 shadow-lg text-blue-50 hover:shadow-blue-300 hover:bg-opacity-90">
					{">"} Contactanos {"<"}
				</button>
			</div>
			<div className="">
				<div className=" min-h-[20rem] bg-orange-50 "></div>
			</div>
		</header>
	);
};

export default Header;
