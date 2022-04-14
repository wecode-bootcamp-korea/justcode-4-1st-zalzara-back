const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userDao = require('../models/userDao');

const signUp = async (
  email,
  password,
  username,
  policyAgreed,
  overseasPrivacy
) => {
  const user = await userDao.getUserByEmail(email); // 가입할 때 이미 있는 유저면 이메일로 체크하기
  if (user.length !== 0) {
    const error = new Error('EXISTING_USER');
    error.statusCode = 409;
    throw error;
  }

  const validateEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  // 계정@도메인.최상위도메인 형식의 데이터 찾기
  const validatePw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  // 소문자 한개이상, 대문자 한개이상, 숫자 한개이상, 8자 이상

  if (!validateEmail.test(email)) {
    const error = new Error('EMAIL_INVALID');
    error.statusCode = 409;
    throw error;
  }
  if (!validatePw.test(password)) {
    const error = new Error('PASSWORD_INVALID');
    error.statusCode = 409;
    throw error;
  }
  if (policyAgreed === false) {
    const error = new Error('POLICY_NOT_AGREED');
    error.statusCode = 409;
    throw error;
  }
  if (overseasPrivacy === false) {
    const error = new Error('OVERSEAS_PRIVACY_NOT_AGREED');
    error.statusCode = 409;
    throw error;
  }

  const encryptedPw = bcrypt.hashSync(password, bcrypt.genSaltSync()); // 솔팅 -> 임의로 생성된 문자열/ 비밀번호 암호화
  const createUser = await userDao.createUser(
    email,
    encryptedPw,
    username,
    policyAgreed,
    overseasPrivacy
  );

  return createUser;
};

const logIn = async (email, password) => {
  // 회원가입 된 유저인지 확인
  const user = await userDao.verifyUser(email, password);
  if (user.length === 0) {
    const error = new Error('NO_USER');
    error.statusCode = 400;
    throw error;
  }

  // 비밀번호 확인
  const isCorrect = bcrypt.compareSync(password, user[0].password);

  if (!isCorrect) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;
    throw error;
  }

  const token = jwt.sign({ userId: user[0].id }, process.env.SECRET_KEY);
  // return token;
};

module.exports = { signUp, logIn };
