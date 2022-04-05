const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

// login
userRouter.route("/login").get(userController.check);

// signup
userRouter.route("/signup").get(userController.check);

module.exports = userRouter;
