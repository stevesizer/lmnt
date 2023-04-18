import { RadioGroup } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Size({ product, selectedVariant, setSelectedVariant }) {
  return (
    <form className='mt-6'>
      {/* Variants */}
      {product.variants?.nodes?.length > 1 && (
        <div>
          <h3 className='text-sm text-gray-600'>
            Select your {product.variants?.nodes[0].selectedOptions[0].name}
          </h3>

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
              <span className='grid grid-cols-6 gap-2'>
                {product.variants?.nodes.map((variant) => (
                  <RadioGroup.Option
                    key={variant.id}
                    value={variant.id}
                    className={({ checked }) =>
                      classNames(
                        checked ? 'border-black' : 'border-gray-300',
                        'border relative flex cursor-pointer items-center justify-center rounded-full p-2 focus:outline-none'
                      )
                    }
                  >
                    {variant.title}{' '}
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
