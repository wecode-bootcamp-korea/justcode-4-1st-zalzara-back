const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const cartRouter = require("./cartRouter");

router.get("/", (req, res) => res.json({ message: "Home" }));
router.use("/categories", productRouter);
router.use("/user", userRouter);
router.use("/shop-cart", cartRouter);

// 회원가입
// 로그인
// 리스트
// 디테일
// 장바구니

module.exports = router;
