import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { shallow } from "zustand/shallow";
import NavbarItem from "./NavbarItem";
import { useConfigStore } from "@/store/config";
import NavbarPhone from "./NavbarPhone";

const Navbar = () => {
	const { changeOpenNav, openNav } = useConfigStore((state) => state, shallow);

	return (
		<nav className="absolute top-0 left-0 min-w-[100vw]">
			<div className="flex items-center justify-between min-w-full px-5 py-5 lg:px-40">
				<Link href="/">
					<Image
						src={"/nival-logo.png"}
						alt="nival-logo"
						width={60}
						height={60}
					/>
				</Link>

				<ul className="items-center hidden gap-4 lg:flex">
					<NavbarItem text="Inicio" url="/" type="url" />
					<NavbarItem text="Nosotros" url="#about" type="id" />
					<NavbarItem text="Servicios" url="/services" type="url" />
					<NavbarItem text="Testimonios" url="#testimonies" type="id" />
				</ul>
			</div>

			<NavbarPhone />
		</nav>
	);
};

export default Navbar;
