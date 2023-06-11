import { useConfigStore } from "@/store/config";
import { useServicesStore } from "@/store/services";

interface Props {
	title: string;
	servicesList: string[];
}

const ServicesDepartmentItem = (props: Props) => {
	const selectService = useServicesStore((state) => state.selectService);
	const deselectService = useServicesStore((state) => state.deselectService);

	const handleService = () => {
		!props.servicesList.includes(props.title)
			? selectService(props.title)
			: deselectService(props.title);
	};

	return (
		<div
			className={`px-3 py-10 shadow-xl rounded-xl max-w-[8.3rem] max-h-[8.3rem] flex items-center justify-center min-w-[8.3rem] cursor-pointer min-h-[8.3rem]  lg:max-w-[10rem] lg:max-h-[10rem] lg:min-w-[10rem] lg:min-h-[10rem] border-4 duration-200  hover:border-blue-200 ${
				props.servicesList.includes(props.title)
					? "bg-blue-200 border-blue-200"
					: "bg-white border-white"
			}`}
			onClick={handleService}
		>
			<span className="text-sm font-semibold text-center uppercase opacity-70 select-none">
				{props.title}
			</span>
		</div>
	);
};

export default ServicesDepartmentItem;
