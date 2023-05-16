import Image from "next/image";
import React from "react";
import { FiUsers } from "react-icons/fi";

const About = () => {
	return (
		<div className="grid gap-10 px-10 py-40 lg:grid-cols-2 lg:px-40" id="about">
			<div>
				<h2 className="flex items-center max-w-[20rem] gap-2 pb-1 text-3xl font-bold bg-opacity-50 bg-orange-400 px-2">
					<FiUsers className="" />
					¿Quienes somos?
				</h2>

				<div className="flex flex-col gap-6 mt-10 text-lg opacity-80">
					<p>
						En <span className="font-bold text-orange-800">Nival Digital</span>,
						somos una empresa de{" "}
						<span className="font-bold text-orange-800">
							publicidad, diseño y programación
						</span>{" "}
						que busca marcar la diferencia en el mundo digital. Nuestro objetivo
						es ayudar tanto a grandes como pequeños negocios a alcanzar su
						máximo potencial en línea, ofreciéndoles{" "}
						<span className="font-bold text-orange-800">
							soluciones personalizadas y de alta calidad
						</span>{" "}
						en branding, desarrollo web, diseño gráfico, community manager y
						ciencia de datos.
					</p>

					<p>
						Nos apasiona trabajar en colaboración con nuestros clientes,
						escuchar sus necesidades y desafíos, y{" "}
						<span className="font-bold text-orange-800">
							transformar sus ideas en soluciones digitales
						</span>{" "}
						que generen resultados positivos. Nos enorgullece ver a nuestros
						clientes alcanzar sus metas y objetivos, y saber que hemos
						contribuido a su éxito.
					</p>

					<p>
						Nos dedicamos a ofrecer un{" "}
						<span className="font-bold text-orange-800">
							servicio excepcional
						</span>{" "}
						y a construir relaciones duraderas con nuestros clientes, basadas en
						la confianza y la transparencia. Si estás buscando una empresa que
						te brinde soluciones digitales de alta calidad y una atención
						personalizada, ¡en Nival Digital estamos aquí para ayudarte!
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center lg:items-end">
				<Image src={"/about.svg"} alt="escalar" width={600} height={600} />
			</div>
		</div>
	);
};

export default About;
