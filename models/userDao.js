const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserByEmail = async (email) => {
  console.log('daodao');
  return await prisma.$queryRaw`
    SELECT email FROM users WHERE email = ${email}
    `;
};

const createUser = async (
  email,
  encryptedPw,
  username,
  policyAgreed,
  overseasPrivacy
) => {
  console.log('createUser');
  return await prisma.$queryRaw`
    INSERT INTO users (email, password, username, personal_info_privacy_policy, overseas_privacy_policy) VALUES (${email}, ${encryptedPw}, ${username}, ${policyAgreed}, ${overseasPrivacy})`;
};

const verifyUser = async (email) => {
  //비번도 있어야되나? 있다면 password 아님 encrtpytedPw?
  return await prisma.$queryRaw`
    SELECT id, email, password from users where email = ${email}
  `;
};

module.exports = { getUserByEmail, createUser, verifyUser };
