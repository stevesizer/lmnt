import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { formatPrice } from '~/utils';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import Variants from '~/components/variants';
import { gql } from 'graphql-request';
import { client } from '~/utils/graphql-client';
import ImageSlider from '../components/ImageSlider';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// function PrintJson({data}) {
//   return (
//     <details className="outline outline-2 outline-blue-300 p-4 my-2">
//       <summary>Product JSON</summary>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </details>
//   );
// }

export default function ProductDetails() {
  const { product } = useLoaderData();
  console.log('product', product);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.nodes[0].id
  );

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-[1300px]  px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='md:grid md:grid-cols-2 md:items-start md:gap-x-8'>
          {/* Image gallery */}
          <div className='md:hidden'>
            <ImageSlider slides={product.media?.nodes} />
          </div>
          <div className='hidden md:grid md:grid-cols-2 gap-4'>
            {product.media?.nodes?.map((node) => (
              <img
                src={node.image.url}
                alt=''
                className='h-full w-full object-cover object-center rounded-xl'
              />
            ))}
          </div>

          {/* Product info */}
          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
              {product.title}
            </h1>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-3xl tracking-tight text-gray-900'>
                {formatPrice(product.priceRange.minVariantPrice.amount)}
              </p>
            </div>

            {/* Reviews */}
            <div className='mt-3'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? 'text-indigo-500'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>

              <div
                className='space-y-6 text-base text-gray-700'
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <Variants
              product={product}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const { handle } = params;

  const variables = {
    handle: handle,
  };

  const { product } = await client.request(PRODUCT_QUERY, variables);

  console.log('product', product);

  if (!product?.id) {
    console.error('Product not found');
    throw new Response('Product cannot be found.', { status: 404 });
  }
  return json({ product });
}

const PRODUCT_QUERY = gql`
  query product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      media(first: 8) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
          ... on Model3d {
            id
            mediaContentType
            sources {
              mimeType
              url
            }
          }
        }
      }
      variants(first: 8) {
        nodes {
          id
          image {
            url
            altText
            width
            height
          }
          title
          selectedOptions {
            name
            value
          }
        }
      }
      tags
      options {
        name
        values
      }
    }
  }
`;

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
    },
  ];
}
