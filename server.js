const http = require('http');
const cors = require('cors');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const routes = require('./routes');
const morgan = require('morgan');
require('dotenv').config();

const prisma = new PrismaClient();
// const prisma = new PrismaClient();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

const server = http.createServer(app);
const PORT = process.env.PORT;

// read users -> 가입된 유저 읽어들이기
// app.get('/user', async (req, res) => {
//   try {
//     const readUser = await prisma.$queryRaw`
//      SELECT * FROM users`;
//     return res.status(201).json({ readUser });
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
// });

const start = async () => {
  // 서버를 시작하는 함수입니다.
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect(); // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
};

start();
