const { Neu } = require("../model");

// main
exports.main = (req, res) => {
  res.render("neu_main");
};

// signup 회원가입
exports.signup = (req, res) => {
  res.render("neu_signup");
};
exports.signup_post = (req, res) => {
  let info = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };
  Neu.create(info).then((response) => {
    console.log(response.dataValues);
    res.send(`<script>document.location.href="/neu/login"</script>`);
  });
};

// login 로그인
exports.login = (req, res) => {
  res.render("neu_login");
};
