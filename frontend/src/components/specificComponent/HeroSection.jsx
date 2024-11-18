import { Leaf, Droplet, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:grid lg:grid-cols-2 ">
      {/* Contenido del texto */}
      <div className="max-w-7xl lg:mr-4 mx-auto px-6 py-8 md:mt-16 sm:mt-16 sm:py-6 flex flex-col justify-center mt-12 ">
        <div className="text-center lg:text-start ">
          <div className="flex justify-center lg:justify-start mb-6 space-x-4 sm:space-x-6">
            <Leaf className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
            <Droplet className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400" />
            <Sun className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500" />
          </div>
          <h2 className="text-sm sm:text-base text-green-600 font-semibold tracking-wide uppercase">
            Macetas Inteligentes
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Cuida tus Plantas con Nuestro Kit
          </p>
          <p className="mt-4 max-w-xl text-lg sm:text-xl text-gray-500 mx-auto lg:mx-0">
            Descubre nuestro kit de jardinería creado con materiales ecológicos, para que tus plantas crezcan sanas.
          </p>
        </div>
        <div className="mt-8 sm:mt-16 md:mt-6 flex justify-center lg:justify-start">
          <Link
            to={"/products"}
            className="inline-block bg-green-600 text-white py-2 px-5 sm:py-3 sm:px-6 rounded-md text-base sm:text-lg font-medium hover:bg-green-700"
          >
            Ver productos
          </Link>
        </div>
      </div>

      {/* Imagen del producto */}
      <div className="flex justify-center items-center px-6">
        <img
          src="/assets/image_plant.jpg"
          alt="Kit de Jardinería"
          className="object-scale-down rounded-lg md:w-3/5"
        />
      </div>
    </div>
  );
}
