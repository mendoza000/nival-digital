import React from "react";
import { BiSend } from "react-icons/bi";

const Newsletter = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-bold uppercase border-b-2 border-b-orange-500 max-w-[6.7rem]">
				Newsletter
			</h4>
			<p className="opacity-75">
				No te pierdas nuestros artículos para emprender en el mundo digital.
				Regístrate en nuestro newsletter ahora.
			</p>

			<form
				onSubmit={handleSubmit}
				className="flex justify-between p-1 bg-orange-500 rounded-md"
			>
				<input
					type="text"
					className="min-w-[85%] max-w-[90%] py-1 px-2 text-blue-950 outline-none rounded-md"
				/>
				<button className="min-w-[10%] py-1">
					<BiSend className="w-5 h-5" />
				</button>
			</form>
		</div>
	);
};

export default Newsletter;
