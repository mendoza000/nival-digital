import Image from "next/image";
import { FiHome, FiInstagram } from "react-icons/fi";

const TestimoniesCard = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 duration-200 bg-white shadow-lg cursor-default py-14 rounded-xl hover:shadow-blue-200 hover:scale-110">
      <div className="flex items-center justify-center p-1 bg-orange-400 rounded-full max-w-[6rem]">
        <Image
          src={"/girl.jpg"}
          alt="girl-image"
          width={90}
          height={90}
          className="rounded-full"
        />
      </div>

      <h3 className="mt-5 text-2xl font-semibold opacity-80">
        [Nombre empresa]
      </h3>
      <p className="max-w-xs mt-5 text-center opacity-75">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quam
        eveniet nulla repellendus officia minima aperiam est, accusamus dicta
        fuga.
      </p>

      <div className="flex items-center gap-5 mt-10">
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
