import React from "react";

interface Props {
	title: string;
	content: string[];
}
const ServicesListItem = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-center gap-10 px-5 duration-200 bg-white shadow-xl cursor-default py-14 lg:flex-row hover:shadow-blue-200 rounded-xl">
			<div className="w-32 h-32 bg-orange-200 rounded-xl"></div>
			<div className="flex flex-col gap-4 lg:mr-auto">
				<h2 className="text-2xl font-bold uppercase opacity-90">
					{props.title}
				</h2>

				<ul className="flex flex-col gap-2 ml-4 list-disc">
					{props.content.map((s) => {
						return (
							<li key={s} className="opacity-75">
								{s}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ServicesListItem;
