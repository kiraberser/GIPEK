import { CheckCircle } from 'lucide-react'

const tiers = [
  {
    name: 'Manual',
    id: 'tier-basico',
    href: '#',
    priceMonthly: '$80',
    description: "Ideal para principiantes que desean una maceta basica para sus plantas.",
    features: [
      'Sistema de riego manual',
      'Materiales sostenibles'
    ],
    featured: false,
  },
  {
    name: 'Automatico',
    id: 'tier-avanzado',
    href: '#',
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
  return classes.filter(Boolean).join(' ')
}

export default function PriceSection() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-green-500">Precios</h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Eligue el mejor producto para ti!
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2 grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-green-500 shadow-2xl' : 'bg-gray-100 text-white shadow-md sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                  : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-white' : 'text-green-500',
                'text-base font-semibold leading-7',
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              
            </p>
            <p className={classNames(tier.featured ? 'text-gray-100' : 'text-gray-600', 'mt-6 text-base leading-7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-100' : 'text-gray-600',
                'mt-8 space-y-3 text-sm leading-6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckCircle
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-green-200' : 'text-green-500', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <button>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-white text-green-600 hover:bg-green-100 '
                    : 'text-green-600 ring-1 ring-inset ring-green-600 hover:ring-green-400 focus-visible:outline-green-600',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                )}
              >
                Comprar Ahora
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
