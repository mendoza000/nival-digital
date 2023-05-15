import React from "react";
import { FiCheckCircle } from "react-icons/fi";

interface Props {
	name: "inicio" | "ascenso" | "élite";
	text: string;
	price: number;
	content: string[];
	url: string;
}

const ServicesListItem = (props: Props) => {
	return (
		<div className="flex flex-col items-center gap-5 px-6 py-6 duration-200 bg-white shadow-xl rounded-xl hover:shadow-blue-200">
			<h3 className="text-3xl font-semibold text-orange-400 uppercase">
				{props.name} digital
			</h3>

			<p className="max-w-[17rem] text-center opacity-60 text-sm">
				{props.text}
			</p>

			<div className="flex flex-col min-w-full py-5 mt-3 text-center border-y-2 border-slate-200">
				<span className="text-3xl font-semibold">${props.price}</span>
				<span className="mt-1 text-sm uppercase opacity-60">pago unico</span>
			</div>

			<div className="flex flex-col min-w-full gap-2 my-5">
				{props.content.map((item, index) => (
					<p key={index} className="flex items-center gap-1">
						<FiCheckCircle className="text-orange-500" />
						{item}
					</p>
				))}
			</div>

			<a
				href={props.url}
				target="_blank"
				className="min-w-full py-3 mt-auto font-semibold text-center text-white duration-200 bg-orange-400 rounded-xl hover:bg-opacity-80"
			>
				Solicitar plan
			</a>
		</div>
	);
};

export default ServicesListItem;
