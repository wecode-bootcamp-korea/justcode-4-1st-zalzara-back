const userService = require('../services/userService');

// const userDao = require('../models/userDao')
// //회원가입
// const signUp = async (email.password) => {

//     if (password.length < 8) {
//       const error = new Error ('PASSWORD_TOO_SHORT')
//       error.statusCode = 400
//       throw error
//     }

//     const user = userDao.
//   }
// }

// const logIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//   }

const check = (req, res) => {
  console.log('aaa');
};
//   if (!email || !password) {
//     const error = new Error('KEY_ERROR');
//     error.statusCode = 400;
//     throw error;
//   }

//   const token = await userService.logIn(email, password);

//   return res.status(201).json({ message: 'LOGIN_SUCCESS', jwt: token});
// } catch(err) {
//   return res.statusCode(err.statusCode || 500).json({ message: err.message });
//   }
// };

module.exports = {
  check,
};
