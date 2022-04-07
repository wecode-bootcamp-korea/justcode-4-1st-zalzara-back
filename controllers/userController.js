const res = require('express/lib/response');
const userService = require('../services/userService');
// const { PrismaClient } = require('@prisma/client');

const validateUser = async (req, res, next) => {
  const { email, password, username, policyAgreed, overseasPrivacy } = req.body;

  if (!email || !password || !username || !policyAgreed || !overseasPrivacy) {
    res.status(400).json({ message: 'KEY_ERROR' });
    return;
  }

  next();
};

// 회원가입
///controller 가 하는 일은 오로지 request 검증하는 일!
const signUp = async (req, res) => {
  try {
    const { email, password, username, policyAgreed, overseasPrivacy } =
      req.body;
    console.log(req.body);

    await userService.signUp(
      email,
      password,
      username,
      policyAgreed,
      overseasPrivacy
    );
    return res.status(201).json({
      message: 'SIGNUP_SUCCESS',
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

// 로그인

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error('KEY ERROR');
      error.statusCode = 400;
      throw error;
    }

    const token = await userService.logIn(email, password);
    return res.status(201).json({ message: 'SUCCESS_LOGIN', token });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  validateUser,
  signUp,
  logIn,
};
