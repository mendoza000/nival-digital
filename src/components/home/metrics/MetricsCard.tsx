import React from "react";
import CountUp from "react-countup";

interface Props {
	title: string;
	count: number;
	text: string;
	type: "+" | "%";
	icon: React.ReactElement;
}

const MetricsCard = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-center cursor-default">
			<div className="flex items-center justify-center p-3 bg-white rounded-full max-w-[4rem]">
				{props.icon}
			</div>
			<h4 className="mt-1 text-xl font-semibold text-white uppercase">
				{props.type === "+" && props.type}
				<CountUp
					start={0}
					end={props.count}
					duration={7}
					enableScrollSpy={true}
				/>
				{props.type === "%" && props.type} {props.title}
			</h4>
			<p className="max-w-xs mt-3 text-center text-white text-md opacity-90">
				{props.text}
			</p>
		</div>
	);
};

export default MetricsCard;
