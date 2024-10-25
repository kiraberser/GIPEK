import { Leaf, Droplet, Sun } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-white m-10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="flex justify-center mb-4 space-x-6">
            <Leaf className="h-12 w-12 text-green-600" />
            <Droplet className="h-12 w-12 text-green-600" />
            <Sun className="h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Macetas Inteligentes</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Riega tus plantas sin esfuerzo
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Descubre nuestras macetas inteligentes con riego automatizado y materiales ecológicos, para que tus plantas crezcan sanas sin preocupaciones.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-block bg-green-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-green-700"
          >
            Ver productos
          </a>
        </div>
      </div>
    </div>
  );
}
