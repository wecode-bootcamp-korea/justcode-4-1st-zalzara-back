const productDao = require("../models/productDao");

const nothingErr = new Error("nothing here");
nothingErr.statusCode = 404;

const showLists = async (category) => {
  let products = await productDao.productsByCategory(category);
  products.forEach((element) => {
    element.size = Object.keys(element.prices[0]).join("");
    element.prices = Object.values(element.prices[0]).join("");
  });

  if (products.length === 0) {
    throw nothingErr;
  } else {
    return products;
  }
};

const showDetail = async (id) => {
  let product = await productDao.findById(id);
  product.forEach((element) => {
    element.size = Object.keys(element.price[0]).join("");
    element.price = Object.values(element.price[0]).join("");
  });

  if (product === undefined || product === null) {
    throw nothingErr;
  } else {
    return product;
  }
};

module.exports = { showLists, showDetail };
