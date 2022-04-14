const productDao = require("../models/productDao");
const productService = require("../services/productService");

const showCategories = async (req, res) => {
  const categoryLists = await productDao.allCategories();

  return res.json({ categoryLists });
};

const showList = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await productService.showLists(category);
    return res.status(200).json({ products });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const showDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const productDetail = await productService.showDetail(id);
    return res.status(200).json({ productDetail });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const postCartFromList = async (req, res) => {
  const { id } = req.body;
  return await productDao.fillCartTable(id);
};

module.exports = { showDetail, showList, showCategories, postCartFromList };

