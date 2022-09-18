const express = require("express");
const member = require("../controller/MemberController");
const router = express.Router();

// 메인페이지
router.get("/main", member.main);

module.exports = router;
