import React from "react";
import { FiUsers } from "react-icons/fi";

const About = () => {
	return (
		<div className="grid gap-10 px-10 py-20 lg:grid-cols-2 lg:px-40" id="about">
			<div>
				<h2 className="flex items-center max-w-[18rem] gap-2 pb-1 text-3xl font-bold border-b-2 border-b-orange-500">
					<FiUsers className="text-orange-500" />
					¿Quienes somos?
				</h2>

				<div className="flex flex-col gap-6 mt-10 opacity-80">
					<p>
						En Nival Digital, somos una empresa de publicidad, diseño y
						programación que busca marcar la diferencia en el mundo digital.
						Nuestro objetivo es ayudar tanto a grandes como pequeños negocios a
						alcanzar su máximo potencial en línea, ofreciéndoles soluciones
						personalizadas y de alta calidad en branding, desarrollo web, diseño
						gráfico, community manager y ciencia de datos.
					</p>

					<p>
						Nos apasiona trabajar en colaboración con nuestros clientes,
						escuchar sus necesidades y desafíos, y transformar sus ideas en
						soluciones digitales que generen resultados positivos. Nos
						enorgullece ver a nuestros clientes alcanzar sus metas y objetivos,
						y saber que hemos contribuido a su éxito.
					</p>

					<p>
						Nos dedicamos a ofrecer un servicio excepcional y a construir
						relaciones duraderas con nuestros clientes, basadas en la confianza
						y la transparencia. Si estás buscando una empresa que te brinde
						soluciones digitales de alta calidad y una atención personalizada,
						¡en Nival Digital estamos aquí para ayudarte!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
