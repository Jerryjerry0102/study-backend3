const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.basic_user);

router.post("/signup", user.signup_user);




module.exports = router;
