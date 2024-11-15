import { CheckCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Manual',
    id: 'tier-basico',
    href: '/products',
    priceMonthly: '$80',
    description: "Ideal para principiantes que desean una maceta básica para sus plantas.",
    features: [
      'Sistema de riego manual',
      'Materiales sostenibles'
    ],
    featured: false,
  },
  {
    name: 'Automático',
    id: 'tier-avanzado',
    href: '/products',
    priceMonthly: '$100',
    description: 'Incluye un sistema de riego automatizado con opciones adicionales y mayor capacidad.',
    features: [
      'Bomba de agua con batería recargable',
      'Depósito de agua de 300ml',
      'Botón de activación manual',
      'Materiales sostenibles y ecológicos',
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PriceSection() {
  return (
    <div className="relative isolate bg-white px-6 py-16 sm:py-24 lg:py-32 min-h-screen">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-green-500">Precios</h2>
        <p className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          ¡Elige el mejor producto para ti!
        </p>
      </div>

      <div className="mx-auto mt-12 grid grid-rows-[1fr_auto] max-w-lg grid-cols-1 gap-8 sm:mt-16 sm:max-w-none sm:grid-cols-2 lg:max-w-4xl">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'bg-green-500 text-white shadow-lg' : 'bg-gray-100 text-green-900',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 transition-all duration-200 ease-in-out hover:shadow-2xl flex flex-col'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-white' : 'text-green-600', 'text-lg font-semibold leading-7 uppercase')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className={classNames(tier.featured ? 'text-white' : 'text-gray-900', 'text-4xl font-bold tracking-tight')}>
                {tier.priceMonthly}
              </span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-200' : 'text-gray-600', 'mt-4 text-base leading-7')}>
              {tier.description}
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-x-2">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-green-200' : 'text-green-500', 'h-6 w-6 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto"> {/* This div pushes the button to the bottom */}
              <Link
                to={`${tier.href}`}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured ? 'bg-white text-green-600 hover:bg-green-100' : 'bg-green-600 text-white hover:bg-green-700',
                  'mt-4 inline-block w-full rounded-md py-2 px-4 text-center text-sm font-semibold'
                )}
              >
                Comprar Ahora
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}