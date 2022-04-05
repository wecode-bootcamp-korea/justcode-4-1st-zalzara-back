const express = require("express");
const productRouter = express.Router();

const productController = require("../controllers/productController");

// list
productRouter.route("/").get().post();

// detail
productRouter.route("/product/:id").get(productController.showDetail);
productRouter.get("/:id", productController.showCategory);

module.exports = productRouter;
