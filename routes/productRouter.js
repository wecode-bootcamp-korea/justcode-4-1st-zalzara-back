const express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/productController');

// category list
productRouter.get('/', productController.showCategories);

// products list
productRouter
  .route("/:category")
  .get(productController.showList)
  .post(productController.postCartFromList);

// product detail
productRouter.route('/:category/:id').get(productController.showDetail);

module.exports = productRouter;
