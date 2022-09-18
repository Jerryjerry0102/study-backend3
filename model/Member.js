module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "member",
    {
      no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      id: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: "member",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
