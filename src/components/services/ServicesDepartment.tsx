import React from "react";
import ServicesDepartmentItem from "./ServicesDepartmentItem";
import { useConfigStore } from "@/store/config";
import { shallow } from "zustand/shallow";
import { useServicesStore } from "@/store/services";

interface Props {
	name: string;
	services: string[];
	// servicesList: string[];
}

const ServicesDepartment = (props: Props) => {
	const servicesList = useServicesStore((state) => state.servicesList);

	return (
		<div className="flex flex-col gap-10">
			<h3 className="flex items-center max-w-[20rem] gap-2 pb-1 text-3xl font-bold bg-opacity-50 bg-orange-400 px-2">
				{props.name}
			</h3>

			<div className="flex flex-wrap gap-7">
				{props.services?.map((service) => {
					return (
						<ServicesDepartmentItem
							key={service}
							title={service}
							servicesList={servicesList}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ServicesDepartment;
