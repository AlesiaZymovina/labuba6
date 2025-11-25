function getProductsNotInPriceRange(products) {
  return products
    .filter(item => item.price < 100 || item.price > 500)
    .map(item => item.name);
}

module.exports = getProductsNotInPriceRange;
