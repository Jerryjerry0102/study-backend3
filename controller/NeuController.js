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
  Neu.create(info).then((result) => {
    console.log("create:", result);
    res.send(
      `<script>alert("회원가입 완료"); document.location.href="/neu/login"</script>`
    );
  });
};

// login 로그인
exports.login = (req, res) => {
  res.render("neu_login");
};
let myInfo;
exports.login_post = (req, res) => {
  Neu.findOne({
    where: {
      id: req.body.id,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("findOne:", result);
    if (result != null) {
      res.send(true);
      myInfo = result.dataValues;
    } else {
      res.send(false);
    }
  });
};

exports.myInfo = (req, res) => {
  res.render("neu_myInfo", { myInfo: myInfo });
};

exports.myInfo_patch = (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };
  Neu.update(data, {
    where: {
      id: myInfo.id,
    },
  }).then((result) => {
    console.log("update:", result);
    res.send("수정 성공");
  });
};
exports.myInfo_delete = (req, res) => {
  Neu.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("destroy:", result);
    res.send("탈퇴 성공");
  });
};
