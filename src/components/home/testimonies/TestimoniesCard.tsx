import Image from "next/image";
import { FiHome, FiInstagram } from "react-icons/fi";

const TestimoniesCard = () => {
	return (
		<div className="flex flex-col items-center justify-center py-10 duration-200 rounded-lg cursor-default hover:bg-slate-50 hover:shadow-lg ">
			<div className="flex items-center justify-center p-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full max-w-[5rem]">
				<Image
					src={"/girl.jpg"}
					alt="girl-image"
					width={70}
					height={70}
					className="rounded-full"
				/>
			</div>

			<h3 className="mt-5 text-xl font-semibold opacity-80">
				[Nombre empresa]
			</h3>
			<p className="max-w-xs mt-5 text-center opacity-75">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quam
				eveniet nulla repellendus officia minima aperiam est, accusamus dicta
				fuga.
			</p>

			<div className="flex items-center gap-5 mt-5">
				<a
					href="https://instagram.com/"
					className="flex items-center gap-1 text-orange-500 duration-200 opacity-60 hover:opacity-100"
				>
					<FiInstagram />
					Instagram
				</a>
				<a
					href="https://instagram.com/"
					className="flex items-center gap-1 text-orange-500 duration-200 opacity-60 hover:opacity-100"
				>
					<FiHome />
					Sitio web
				</a>
			</div>
		</div>
	);
};

export default TestimoniesCard;
