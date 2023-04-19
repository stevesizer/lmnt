import { GraphQLClient } from 'graphql-request';
import { PRODUCTS_QUERY, PRODUCT_QUERY } from './queries';

export async function fetchProducts(client, query = PRODUCTS_QUERY) {
  try {
    if (!client) {
      client = new GraphQLClient(process.env.API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.ACCESS_TOKEN,
        },
      });
    }
    const { products } = await client.request(query);

    return products;
  } catch (error) {
    throw new Response('Error connecting to store. Please try again.', {
      status: 503,
    });
  }
}

export async function fetchProduct(handle, query = PRODUCT_QUERY, client) {
  try {
    if (!client) {
      client = new GraphQLClient(process.env.API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.ACCESS_TOKEN,
        },
      });
    }
    const variables = { handle };
    const { product } = await client.request(query, variables);

    // if product is null, throw error

    return product;
  } catch (error) {
    throw new Response('Error connecting to store. Please try again.', {
      status: 503,
    });
  }
}
