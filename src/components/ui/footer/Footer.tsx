import Image from "next/image";
import AboutUs from "./AboutUs";
import Newsletter from "./Newsletter";
import Redes from "./Redes";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
	return (
		<div className="flex flex-col min-w-full gap-10 px-10 py-20 lg:px-40 bg-slate-900 text-blue-50">
			<div className="grid gap-5 lg:grid-cols-3">
				<Redes />
				<AboutUs />
				<Newsletter />
			</div>

			<div className="flex items-center justify-between border-t-2 pt-7 border-t-slate-800">
				<p className="flex items-center gap-2 text-lg opacity-80">
					<BiCopyright className="text-orange-500" />
					Nival digital - 2023
				</p>

				<Image
					src={"/nival-logo.png"}
					alt="nival-logo"
					width={60}
					height={60}
				/>
			</div>
		</div>
	);
};

export default Footer;
