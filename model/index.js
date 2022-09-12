const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
// [] 적고 그 안에 무엇 안으로 들어갈지 적어줘야 함!

const db = {};
const sequelize = new Sequelize( // 모듈로 불러온 Sequelize 쓰는 것
    config.database,    // 데이터베이스
    config.username,    // 사용자명
    config.password,    // 비밀번호    
    config              // 정보 전체
);

db.sequelize = sequelize;
// 모듈로 내보낼 때 db라는 변수를 내보내고 있는데
// 아까 만들어둔 sequelize를 담아서 내보낼 건데
// db = {
//  "sequelize" : sequelize
// }
// sequelize키 안에 내가 만들어 둔 squelize를 담은 것.

db.Sequelize = Sequelize;
// 나중에 쓸 수 있기 때문에 담아둔 것

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// 지금 수정하는 파일이 있는 위치에 있는 Visitor.js를 불러오겠다는 의미
// 결국 Visitor(sequelize, Sequelize)다. 인자를 넘겨주고 있는 것

// 여기까지 왔을 때 db형태
// db = {
//     "sequelize" : sequelize,
//     "Sequelize" : Sequelize,
//     "Visitor" : require("./visitor")(sequelize, Sequelize)
// }

db.Guest = require("./Guest")(sequelize, Sequelize);

db.User = require("./User")(sequelize, Sequelize);





// table 여러 개 일 때 primary key foreign key 연결
// db.Payment = require("../Payment")(sequelize, Sequelize);

// db.User.hasMany(db.Payment, {
//     foreignKey: "user_ID",
//     sourceKey: "ID",
//     onDelete: "cascade"
// });

// db.Payment.belongsTo(db.User, {
//     foreignKey: "user_ID",
//     sourceKey: "ID",
//     onDelete: "cascade"
// })


module.exports = db;
// 모든 controller에서 사용하기 위해서 내보내고 있는 것




