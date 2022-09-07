// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model");
// 위에게 무슨 말이냐
// const model = require("../model");
// model = {
//     "sequelize" : sequelize,
//     "Sequelize" : Sequelize,
//     "Visitor" : require("./visitor")(sequelize, Sequelize)
// }
// model.Visitor 
// ==
// const { Visitor } = require("../model");
// 지금 작성하는 것에서는 Visitor키 값만 필요하기 때문에 const { Visitor } = require("../model"); 처럼 쓴 것

exports.get_visitors = (req,res) => {
    Visitor.findAll()
    // select * from visitor
    // findAll은 promise이기 때문에 다음에 할 일은 then을 적고 적어준다
    .then((result) => {
        console.log("result: ", result);
        console.log( "index" );
        res.render("index", { data: result });
    })

    // Visitor.get_visitors(function( result ){
    //     console.log( "result: ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    // insert into visitor (name, comment) values(req.body.name, req.body.comment)
    var data = {
        name: req.body.name,
        comment: req.body.comment
    }
    Visitor.create(data)
    .then((result) => {
        // sql문을 실행시켰을 때 그러니까 Visitor.create()를 실행시켰을 때 나오는 반환값이 result
        console.log( result );
        // result 찍으면 visitor{} 이렇게 dictionary로 나옴.
        // result.dataValues.id 찍은 거랑 result.id 찍는 거랑 같음
        // dataValues에는 바로 들어갈 수 있기 때문에 가능
        res.send({ id: result.id });
    })
    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // });
}

exports.get_visitor = (req,res) => {
    Visitor.findOne({
        attributes: [ 'name', 'comment'],
        // select name, comment from 이걸 해주는 것
        where: { id: req.query.id } //id = req.body.id
        // select * from visitor where id = req.body.id limit1
        // findOne은 하나만 나옴. 
        // findAll은 배열로 나오고 findOne은 배열로 나오지 않는다.
        // 그래서 res.send에서 인덱스를 없애주면 됨.
    })
    .then((result)=>{
        console.log( "result : ", result );
        res.send( { result : result } );
    })
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}

exports.patch_comment = (req,res) => {
    // update visitor set name=req.body.name, comment=req.body.comment where id=req.body.id
    var data = {
        name: req.body.name,
        comment: req.body.comment
    }
    Visitor.update(data, {
        where: { id: req.body.id }
    })
    .then((result)=>{
        console.log( result );
        //if문 써야 확인가능 ==1 이면 수정성공 else 수정실패 뜨게
        res.send( "수정 성공" );
    })

    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
}

exports.delete_comment = (req,res) => {
    // delete from visitor where id = ???
    Visitor.destroy({
        where: { id: req.body.id }
    })
    .then((result) => {
        console.log( result );
        res.send( "삭제 성공" );
    })

    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
}