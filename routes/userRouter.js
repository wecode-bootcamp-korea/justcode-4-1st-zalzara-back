const express = require('express');
// const router = require('.');
const userRouter = express.Router();
const userController = require('../controllers/userController');

// // login
// Router.route('/login').post(userController.logIn);

// signup
// router.route('/signup').post(userController.signUp);
userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.logIn);

module.exports = userRouter;
