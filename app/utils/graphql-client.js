import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.API_URL, {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': process.env.ACCESS_TOKEN,
  },
});
