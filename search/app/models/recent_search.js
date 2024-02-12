module.exports = function model(sequelize, DataTypes) {
  const Recent_search = sequelize.define(
    "recent_search",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "recent_search",
      timestamps: false,
    }
  );

  return Recent_search;
};
