const { Member } = require("../model");

// 메인페이지
exports.main = (req, res) => {
  res.render("main");
};
