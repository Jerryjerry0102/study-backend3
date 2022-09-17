const Neu = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "neu",
    {
      id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true,
      },
      pw: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "neu",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = Neu;
