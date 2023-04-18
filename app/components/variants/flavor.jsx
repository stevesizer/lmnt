import { RadioGroup } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Flavor({
  product,
  selectedVariant,
  setSelectedVariant,
}) {
  const selectedVariantName = product.variants?.nodes.find(
    (variant) => variant.id === selectedVariant
  ).title;
  return (
    <form className='mt-6'>
      {/* Variants */}
      {product.variants?.nodes?.length > 1 && (
        <div>
          <h3 className='text-sm text-gray-600'>
            Select your {product.variants?.nodes[0].selectedOptions[0].name}
          </h3>

          {/* get the selected variant and display the name */}
          <p className='text-sm font-medium mt-2'>{selectedVariantName}</p>

          {selectedVariant && (
            <RadioGroup
              value={selectedVariant}
              onChange={setSelectedVariant}
              className='mt-2'
            >
              <RadioGroup.Label className='sr-only'>
                {' '}
                Choose a {
                  product.variants?.nodes[0].selectedOptions[0].name
                }{' '}
              </RadioGroup.Label>
              <span className='grid grid-cols-4 gap-4'>
                {product.variants?.nodes.map((variant) => (
                  <RadioGroup.Option
                    key={variant.id}
                    value={variant.id}
                    className={({ checked }) =>
                      classNames(
                        variant.title,
                        checked ? 'ring-4' : '',
                        'relative ring-brand-blue flex flex-col cursor-pointer items-center justify-center focus:outline-none'
                      )
                    }
                  >
                    <img src={variant.image.url} alt={variant.image.altText} />
                  </RadioGroup.Option>
                ))}
              </span>
            </RadioGroup>
          )}
        </div>
      )}

      <div className='sm:flex-col1 mt-10 flex'>
        <button
          type='submit'
          className='flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-brand-blue px-8 py-3 text-base font-medium text-gray-900  focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
        >
          Add to cart
        </button>
      </div>
    </form>
  );
}
