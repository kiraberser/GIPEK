import { Leaf, Droplet, Sun } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center m-0">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:pt-24 sm:px-6 lg:py-32 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6 space-x-4 sm:space-x-6">
            <Leaf className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
            <Droplet className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
            <Sun className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500" />
          </div>
          <h2 className="text-sm sm:text-base text-green-600 font-semibold tracking-wide uppercase">
            Macetas Inteligentes
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Riega tus plantas sin esfuerzo
          </p>
          <p className="mt-4 max-w-xl text-lg sm:text-xl text-gray-500 mx-auto">
            Descubre nuestras macetas inteligentes con riego automatizado y materiales ecológicos, para que tus plantas crezcan sanas sin preocupaciones.
          </p>
        </div>
        <div className="mt-8 sm:mt-16 flex justify-center">
          <a
            href="#"
            className="inline-block bg-green-600 text-white py-2 px-5 sm:py-3 sm:px-6 rounded-md text-base sm:text-lg font-medium hover:bg-green-700"
          >
            Ver productos
          </a>
        </div>
      </div>
    </div>
  );
}
