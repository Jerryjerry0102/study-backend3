const Visitor = ( Sequelize, DataTypes ) => {
    //Sequelize: model/index.js의 sequelize 객체다.
    //DataTypes: model/index.js의 Sequelize 객체다.

    // Sequelize 모델 정의
    // Sequelize.define( (1)인자, (2)인자, (3)인자 )
    // (1) 모델(테이블) 이름 설정
    // (2) 컬럼 정의
    // (3) 모델의 옵션 정의
    // 아래 부분은 정우오빠가 보내준 slack이랑 ppt확인하면서 필기 마저 하기
    const model = Sequelize.define(
        "visitor",
        {   
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: { // comment mediumText
                type: DataTypes.TEXT("medium")
            }
        },
        {
            tableName: "visitor",
            freezTableName: true,   // tableName을 고정해주겠다는 의미
            timestamps: false 
        }
    );
    return model;
}

module.exports = Visitor;

// 테이블 하나 만들 때 마다 전체적인 구조는 이렇게 된다.