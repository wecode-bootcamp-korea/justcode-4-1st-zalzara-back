const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controllers/cartController");

// shop-cart
// cartRouter.route("/shop-cart").get(cartController.getOrder).post();
cartRouter.post('/add-cart', cartController.addCart)

module.exports = cartRouter;
