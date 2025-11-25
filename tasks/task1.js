function getPopularCategories(products) {
  const popular = products.filter(item => item.sales > 5);

  const categorySales = {};
  popular.forEach(item => {
    if (!categorySales[item.category]) {
      categorySales[item.category] = 0;
    }
    categorySales[item.category] += item.sales;
  });

  const categories = Object.keys(categorySales);
  categories.sort((a, b) => categorySales[b] - categorySales[a]);

  return categories;
}

module.exports = getPopularCategories;
