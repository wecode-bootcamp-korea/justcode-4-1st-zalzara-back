const express = require('express');
// const router = require('.');
const router = express.Router();
const userController = require('../controllers/userController');

// // login
// Router.route('/login').post(userController.logIn);

// signup
// router.route('/signup').post(userController.signUp);
router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);

module.exports = router;
