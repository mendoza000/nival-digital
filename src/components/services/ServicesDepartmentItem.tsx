import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useConfigStore } from "@/store/config";

interface Props {
	title: string;
	servicesList: string[];
}

const ServicesDepartmentItem = (props: Props) => {
	const { selectService, deselectService } = useConfigStore((state) => state);

	const handleService = () => {
		props.servicesList.includes(props.title)
			? deselectService(props.title)
			: selectService(props.title);
	};

	return (
		<div
			className={`px-3 py-10 bg-white shadow-xl rounded-xl max-w-[8.3rem] max-h-[8.3rem] flex items-center justify-center min-w-[8.3rem] cursor-pointer min-h-[8.3rem]  lg:max-w-[10rem] lg:max-h-[10rem] lg:min-w-[10rem] lg:min-h-[10rem] border-4 duration-200 border-white hover:border-blue-200 ${
				props.servicesList.includes(props.title)
					? "bg-blue-200 border-blue-200"
					: ""
			}`}
			onClick={handleService}
		>
			<span className="text-sm font-semibold text-center uppercase opacity-70">
				{props.title}
			</span>
		</div>
	);
};

export default ServicesDepartmentItem;
