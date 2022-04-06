const express = require("express");
const cartRouter = express.Router();

// shop-cart
cartRouter.route("/shop-cart").get().post();

module.exports = cartRouter;
