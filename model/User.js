const User = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define(
        "User",
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
            pw: {
                type: DataTypes.STRING(15),
                allowNull: false
            }
        },
        {
            tableName: "user",
            freezTableName: true,
            timestamps: false
        }
    );
    return model;
}

module.exports = User;