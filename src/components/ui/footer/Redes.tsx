import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Redes = () => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-bold uppercase border-b-2 border-b-orange-500 max-w-[3.2rem]">
				Redes
			</h4>

			<div className="flex flex-col gap-2">
				<a
					href="https://instagram.com/nivaldigital"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
					target="_blank"
				>
					<FiInstagram />
					Instragram
				</a>

				<a
					href="https://instagram.com"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
					target="_blank"
				>
					<FiFacebook />
					Facebook
				</a>

				<a
					href="mailto:analisi_datos@nivaldigital.com"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
					target="_blank"
				>
					<FiMail />
					Correo
				</a>

				<a
					href="https://wa.me/+584121264718yar"
					className="flex items-center gap-1 duration-200 opacity-70 hover:opacity-100"
					target="_blank"
				>
					<FaWhatsapp />
					Whatsapp
				</a>
			</div>
		</div>
	);
};

export default Redes;
