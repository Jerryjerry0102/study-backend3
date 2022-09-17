const { User } = require("../model");
// const model = require("../model");
// model.User
// =
// const { User } = require("../model");

exports.main_user = (req, res) => {
  res.render("main");
};

exports.signup_user = (req, res) => {
  res.render("signup");
};
exports.register_signup = (req, res) => {
  var info = {
    name: req.body.name,
    pw: req.body.pw,
  };
  User.create(info).then((result) => {
    console.log("create:", result);
    res.send("회원가입 완료");
  });
};

exports.login_user = (req, res) => {
  res.render("login");
};
exports.post_login = (req, res) => {
  User.findAll().then((data) => {
    // console.log("findAll:", result);
    console.log("findAll2:", data[0].name);
    console.log(req.body.name);
    console.log(req.body.pw);
    let result = false;
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
      console.log(data[i].pw);
      if (req.body.name === data[i].name && req.body.pw === data[i].pw) {
        result = true;
        break;
      }
    }
    if (result == true) {
      res.send("로그인 성공");
      // 이거는 res.rendr로 바꿔서 mypage로 가게 하고
    } else res.send("로그인 실패");
    // "아이디 또는 비밀번호를 잘못 입력했습니다."
    // 이거는 이대로
  });
};

exports.profile_user = (req, res) => {
  res.render("profile");
};
