import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { formatPrice } from '~/utils';
import { gql } from 'graphql-request';
import { client } from '~/utils/graphql-client';
export default function Store() {
  const { products } = useLoaderData();
  console.log('products', products);
  return (
    <div>
      <div className='max-w-[1300px] mx-auto p-12'>
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

export async function loader() {
  const { products } = await client.request(PRODUCTS_QUERY);

  return json({ products });
}

const PRODUCTS_QUERY = gql`
  query Products {
    products(first: 10) {
      nodes {
        id
        handle
        description
        title
        featuredImage {
          altText
          url
        }
        variants(first: 1) {
          nodes {
            id
            image {
              url
              altText
              width
              height
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        tags
      }
    }
  }
`;
