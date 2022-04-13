const productDao = require("../models/productDao");

const showLists = async (category) => {
  let products = await productDao.productsByCategory(category);
  products.forEach((element) => {
    element.prices = Object.values(element.prices[0]).join("");
  });

  const nothingErr = new Error("nothing here");
  nothingErr.statusCode = 404;

  if (products.length === 0) {
    throw nothingErr;
  } else {
    return products;
  }
};

module.exports = { showLists };
