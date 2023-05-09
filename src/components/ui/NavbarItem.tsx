import Link from "next/link";
import React from "react";

interface Props {
	text: string;
	url: string;
	type: "url" | "id";
}

const NavbarItem = (props: Props) => {
	return (
		<li>
			{props.type === "url" ? (
				<Link
					className="px-4 py-2 font-semibold duration-200 hover:text-blue-50 hover:bg-orange-500"
					href={props.url}
				>
					{props.text}
				</Link>
			) : (
				<a
					href={props.url}
					className="px-4 py-2 font-semibold duration-200 hover:text-blue-50 hover:bg-orange-500"
				>
					{props.text}
				</a>
			)}
		</li>
	);
};

export default NavbarItem;
