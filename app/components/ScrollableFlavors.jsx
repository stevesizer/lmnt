import chocolate from '~/images/08_CHOCOLATE_FRUIT.webp';
import citrus from '~/images/08_CITRUS_FRUIT.webp';
import mango from '~/images/08_MANGO_CHILI_FRUIT.webp';
import orange from '~/images/08_ORANGE_FRUIT.webp';
import raspberry from '~/images/08_RASPBERRY_FRUIT.webp';
import raw from '~/images/08_RAW_FRUIT.webp';
import watermelon from '~/images/08_WATERMELON_FRUIT.webp';
import lemon_hab from '~/images/08_LEMON_HAB_FRUIT.webp';
import { Link } from '@remix-run/react';

const products = [
  {
    id: 1,
    name: 'Citrus Salt',
    description: '30 count',
    href: '/store',
    imageSrc: citrus,
    imageAlt: 'Citrus Salt',
    shadowColor: 'group-hover:shadow-lime-400/50',
  },
  {
    id: 2,
    name: 'Watermelon Salt',
    description: '30 count',
    href: '/store',
    imageSrc: watermelon,
    imageAlt: 'Watermelon Salt',
    shadowColor: 'group-hover:shadow-rose-400/50',
  },
  {
    id: 3,
    name: 'Orange Salt',
    description: '30 count',
    href: '/store',
    imageSrc: orange,
    imageAlt: 'Orange Salt',
    shadowColor: 'group-hover:shadow-orange-400/50',
  },
  {
    id: 4,
    name: 'Raspberry Salt',
    description: '30 count',
    href: '/store',
    imageSrc: raspberry,
    imageAlt: 'Raspberry Salt',
    shadowColor: 'group-hover:shadow-red-400/50',
  },
  {
    id: 5,
    name: 'Chocolate Salt',
    description: '30 count',
    href: '/store',
    imageSrc: chocolate,
    imageAlt: 'Chocolate Salt',
    shadowColor: 'group-hover:shadow-orange-900/50',
  },
  {
    id: 6,
    name: 'Mango Chilli',
    description: '30 count',
    href: '/store',
    imageSrc: mango,
    imageAlt: 'Mango Chilli',
    shadowColor: 'group-hover:shadow-orange-400/50',
  },
  {
    id: 7,
    name: 'Raw Unflavored',
    description: '30 count',
    href: '/store',
    imageSrc: raw,
    imageAlt: 'Raw Unflavored',
    shadowColor: 'group-hover:shadow-brand-blue/50',
  },
  {
    id: 8,
    name: 'Lemon Habanero',
    description: '30 count',
    href: '/store',
    imageSrc: lemon_hab,
    imageAlt: 'Lemon Habanero',
    shadowColor: 'group-hover:shadow-yellow-400/50',
  },
];

export default function ScrollableFlavors() {
  return (
    <div className='lg:hidden relative mt-8'>
      <div className='relative w-full overflow-x-auto pb-6'>
        <ul
          role='list'
          className='mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0'
        >
          {products.map((product) => (
            <li
              key={product.id}
              className='inline-flex w-64 flex-col text-center lg:w-auto'
            >
              <Link to={product.href}>
                <div className='group relative'>
                  <div
                    className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:shadow-2xl ${product.shadowColor}`}
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className='h-full w-full object-cover object-center '
                    />
                  </div>
                  <div className='mt-6'>
                    <h3 className='mt-1 font-semibold text-gray-100'>
                      <Link to={product.href}>
                        <span className='absolute inset-0' />
                        {product.name}
                        <p>{product.description}</p>
                      </Link>
                    </h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
