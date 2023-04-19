import { fetchProducts } from '../data';
import { WRONG_PRODUCT_QUERY } from '../data/queries';
test('get all all products', async () => {
  const products = await fetchProducts();
  // expect count to be 7
  expect(products.nodes.length).toBe(7);
});

test('cannot get products due to wrong query', async () => {
  // expect fetchProducts to throw an error with status 503
  // expect fetchProducts to throw an error
  try {
    await fetchProducts();
  } catch (error) {
    expect(error).toBeInstanceOf(Response);
    expect(error.status).toBe(503);
  }
});
