const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

// login
userRouter.route('/login').post(userController.logIn);

// signup
userRouter.route('/signup').post(userController.signUp);

module.exports = userRouter;
