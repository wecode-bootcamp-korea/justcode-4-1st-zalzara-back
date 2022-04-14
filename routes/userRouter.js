const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

// signup
// router.route('/signup').post(userController.signUp);
userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.logIn);

module.exports = userRouter;
