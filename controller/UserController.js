const { User } = require("../model");
// const model = require("../model");
// model.User
// =
// const { User } = require("../model");

exports.basic_user = (req, res) => {
    res.render("signup")
}

exports.signup_user = (req, res) => {
    var info = {
        name: req.body.name,
        pw: req.body.pw
    }
    User.create(info).
    then((result) => {
        console.log("create:", result);
        res.send("회원가입 완료");
    })
}