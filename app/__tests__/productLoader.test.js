import { fetchProduct } from '../data';
import { WRONG_PRODUCT_QUERY } from '../data/queries';

class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}

test('get a valid product with correct handle', async () => {
  const product = await fetchProduct('stay-salty-yeti-rambler');
  // expect count to be 7
  expect(product.handle).toBe('stay-salty-yeti-rambler');
});

test('cannot get product due to invalid query', async () => {
  // expect fetchProducts to throw an error with status 503
  // expect fetchProducts to throw an error
  try {
    const product = await fetchProduct(
      'stay-salty-yeti-rambler',
      WRONG_PRODUCT_QUERY
    );
  } catch (error) {
    expect(error.status).toBe(503);
  }
});

test('cannot get product due to invalid handle, replicate loader', async () => {
  // expect fetchProducts to throw an error with status 503
  // expect fetchProducts to throw an error
  try {
    const product = await fetchProduct('invalid-handle');

    if (!product?.id) {
      throw new CustomError('Product cannot be found.', 404);
    }
  } catch (error) {
    expect(error.status).toBe(404);
  }
});
