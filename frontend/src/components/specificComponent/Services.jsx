import { Droplet, Recycle, Sun, Eye } from 'lucide-react';

const features = [
  {
    name: 'Riego automatizado',
    description:
      'El sistema ajusta automáticamente el flujo de agua según las necesidades de la planta, asegurando un crecimiento saludable y constante.',
    icon: Droplet,
  },
  {
    name: 'Materiales sostenibles',
    description:
      'Nuestras macetas están fabricadas con materiales 100% reciclables y ecológicos, contribuyendo al cuidado del medio ambiente.',
    icon: Recycle,
  }
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-34 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <h2 className="text-base font-semibold leading-7 text-green-600">Innovación sostenible</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Macetas inteligentes para un futuro más verde
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubre cómo nuestras macetas automatizadas te ayudan a cuidar tus plantas de manera eficiente y ecológica, usando lo último en tecnología de auto-riego y sostenibilidad.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
