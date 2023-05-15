import Link from "next/link";
import React from "react";

interface Props {
	text: string;
	url: string;
	icon: React.ReactElement;
	type: "url" | "id";
}

const NavbarItem = (props: Props) => {
	return (
		<li>
			{props.type === "url" ? (
				<Link
					className="flex px-4 py-2 text-2xl font-semibold duration-200 hover:text-blue-50 hover:bg-orange-500"
					href={props.url}
				>
					{props.icon}
				</Link>
			) : (
				<Link
					className="flex px-4 py-2 text-2xl font-semibold duration-200 hover:text-blue-50 hover:bg-orange-500"
					href={"/" + props.url}
				>
					{props.icon}
				</Link>
			)}
		</li>
	);
};

export default NavbarItem;
