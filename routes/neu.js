const express = require("express");
const neu = require("../controller/NeuController");
const router = express.Router();

// main page
router.get("/main", neu.main);

// signup page
router.get("/signup", neu.signup);
router.post("/signup", neu.signup_post);

// login page
router.get("/login", neu.login);
router.post("/login", neu.login_post);

// myInfo page
router.get("/myInfo", neu.myInfo);
router.patch("/myInfo", neu.myInfo_patch);
router.delete("/myInfo", neu.myInfo_delete);

module.exports = router;
