const { Guest } = require("../model");

exports.get_guests = (req, res) => {
    Guest.findAll()
    .then((result) => {
        console.log("findAll:", result);
        res.render("guest", {data: result});
    })
}

exports.register_guest = (req, res) => {
    var info = {
        name: req.body.name,
        comment: req.body.comment
    }
    Guest.create(info)
    .then((result)=>{
        console.log("create:", result);
        res.send({id: result.id});
    })
}

exports.delete_guest = (req, res) => {
    Guest.destroy({
        where: {id: req.body.id}
    })
    .then((result) => {
        console.log("destroy:", result);
        res.send("삭제 완료");
    })
}

exports.lead_guest = (req, res) => {
    Guest.findOne({
        where: {id: req.query.id}
        // get params query
        // params는 URL에 들어가는 query string
        // query string: url주소에 미리 합의한 데이터를 매개변수(parameter)를 이용해서 주는 것
        // params는 요청과 함께 전송되는 URL 파라미터
        // 즉 params는 get처럼 url에 모든 정보를 담는다.
    
        // post data body
        // data는 body에 들어가는 데이터
        // data는 요청 body로 전송될 데이터
        // data는 남들이 쉽게 볼 수 없기 때문에 req.body에 담아서 보내는 것
        // put, post, patch, delete 메소드에서만 적용 가능
    })
    .then((result) => {
        console.log("findOne:", result);
        res.send(result);
    })
}

exports.correct_guest = (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment
    }
    Guest.update(data, {
        where: {id: req.body.id}
    })
    .then((result) => {
        console.log("update:", result);
        res.send(data);
    })
}