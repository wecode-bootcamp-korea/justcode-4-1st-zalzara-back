const express = require("express");
const cartRouter = express.Router();

cartRouter.route("/shop-cart").get().post();

module.exports = cartRouter;
