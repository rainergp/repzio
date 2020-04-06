export function priceFilter(price: number) {
  return '$' + price.toFixed(2).toString();
}
