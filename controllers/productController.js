const { allCategories, productsByCategory } = require("../models/productDao");

const { PrismaClient } = require("@prisma/client");

const showCategories = async (req, res) => {
  const categoryLists = await allCategories();

  return res.json({ categoryLists });
};

const showList = async (req, res) => {
  const { category } = req.params;
  let products = await productsByCategory(category);

  return res.json({ products });
};

const showDetail = (req, res) => {
  const { id } = req.params;
  console.log(id);
};

const postCart = (req, res) => {
  console.log(res.body);
};

module.exports = { showDetail, showList, showCategories, postCart };
