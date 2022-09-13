const { User } = require("../model");
// const model = require("../model");
// model.User
// =
// const { User } = require("../model");

exports.main_user = (req, res) => {
    res.render("main")
}

exports.signup_user = (req, res) => {
    res.render("signup")
}
exports.register_signup = (req, res) => {
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

exports.login_user = (req, res) => {
    res.render("login")
}
exports.post_login = (req, res) => {
    User.findAll().
    then((result) => {
        console.log("findAll:", result);
        let res = false;
        for(let i=0; i < result.length; i++){
            if(req.body.name === result[i].name && req.body.pw === result[i].pw){
                res = true;
                break;
            }
        }
    })
    if(res == true){
        res.render("profile");
        // 이거는 res.rendr로 바꿔서 mypage로 가게 하고
    }else res.send("아이디 또는 비밀번호를 잘못 입력했습니다.")
    // 이거는 이대로
}