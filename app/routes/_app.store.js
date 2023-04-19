import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { formatPrice } from '~/utils';
import { gql, GraphQLClient } from 'graphql-request';
import { PRODUCTS_QUERY } from '~/data/queries';
import { fetchProducts } from '~/data';

export default function Store() {
  const { products } = useLoaderData();
  return (
    <div>
      <div className='max-w-[1300px] mx-auto py-12 px-4'>
        <h1 className='text-4xl text-gray-900 mb-8 font-bold'>Shop All</h1>
        <div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8'>
          {products.nodes.map((product) => {
            return (
              <div key={product.id} className='group relative'>
                <div className='h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80'>
                  <img
                    src={product.featuredImage?.url}
                    alt={product.title}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <h3 className='mt-4 text-sm text-gray-700'>
                  <a href={`/products/${product.handle}`}>
                    <span className='absolute inset-0' />
                    <p className='font-bold'>{product.title}</p>
                    {product.tags.length > 0 && (
                      <p className='text-gray-600'>{product.tags[0]}</p>
                    )}
                    <p className='font-bold mt-2'>
                      {formatPrice(product.priceRange.minVariantPrice.amount)}
                    </p>
                  </a>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {product.price}
                </p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// export async function fetchProducts(client, query = PRODUCTS_QUERY) {
//   if (!client) {
//     client = new GraphQLClient(process.env.API_URL, {
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': process.env.ACCESS_TOKEN,
//       },
//     });
//   }
//   console.log('query', query);
//   const { products } = await client.request(query);

//   return products;
// }

export async function loader() {
  try {
    const products = await fetchProducts(null, PRODUCTS_QUERY);

    return json({ products });
  } catch (error) {
    throw new Response('Error connecting to store. Please try again.', {
      status: 503,
    });
  }
}

export const meta = () => {
  return [
    { title: 'Store | LMNT' },
    {
      name: 'description',
      content:
        'LMNT Recharge is a tasty electrolyte drink mix that replaces vital electrolytes without the sugar, LMNT Recharge is the perfect sports drink for athletes, low-carb, keto, and paleo diet followers, and people who need electrolytes.',
    },
  ];
};
