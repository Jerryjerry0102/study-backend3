const Guest = ( Sequelize, DataTypes ) => {
    const model = Sequelize.define(
        "guest",
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
            comment: {
                type: DataTypes.TEXT("medium")
            }
        },
        {
            tableName: "guest",
            freezTableName: true,
            timestamps: false
        }
    );
    return model;
}

module.exports = Guest;