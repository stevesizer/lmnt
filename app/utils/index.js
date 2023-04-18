export function formatPrice(stringPrice) {
  const price = parseFloat(stringPrice);
  return `$${price.toFixed(2)}`;
}
