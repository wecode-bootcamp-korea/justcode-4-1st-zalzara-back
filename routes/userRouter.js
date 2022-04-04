const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.route("/login").get(userController.check);
userRouter.route("/signup").get(userController.check);

module.exports = userRouter;
