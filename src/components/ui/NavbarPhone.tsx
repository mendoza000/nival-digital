import { shallow } from "zustand/shallow";
import NavbarItemPhone from "./NavbarItemPhone";
import { useConfigStore } from "@/store/config";
import { FiCode, FiHome, FiStar, FiUsers } from "react-icons/fi";

const NavbarPhone = () => {
	const { openNav } = useConfigStore((state) => state, shallow);

	return (
		<div
			className={`fixed bottom-0 min-w-[100vw] py-3 px-5 z-10 bg-white shadow-xl lg:hidden`}
		>
			<ul className="flex items-center justify-between">
				<NavbarItemPhone text="Inicio" url="/" icon={<FiHome />} type="url" />
				<NavbarItemPhone
					text="Nosotros"
					url="/#about"
					icon={<FiUsers />}
					type="id"
				/>
				<NavbarItemPhone
					text="Servicios"
					url="/services"
					icon={<FiCode />}
					type="url"
				/>
				<NavbarItemPhone
					text="Testimonios"
					url="/#testimonies"
					icon={<FiStar />}
					type="id"
				/>
			</ul>
		</div>
	);
};

export default NavbarPhone;
