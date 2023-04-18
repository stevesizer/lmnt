export async function storefront(query, variables = {}) {
  console.log('storefront', process.env.API_URL);
  const { data } = await fetch(process.env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  console.log('storefront: data', data);

  console.log('storefront', data);
  return data;
}
