const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

// 메인 //
router.get("/", user.main_user);

// 회원가입 //
router.get("/signup", user.signup_user);
router.post("/signup/register", user.register_signup);

// 로그인 //
router.get("/login", user.login_user);
router.post("/login/post", user.post_login);

// 프로필 //
router.get("/profile", user.profile_user);

module.exports = router;
