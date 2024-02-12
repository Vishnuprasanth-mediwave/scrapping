module.exports = function model(sequelize, DataTypes) {
  const Scrap_details = sequelize.define(
    "scrap_details",
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
      tableName: "scrap_details",
      timestamps: false,
    }
  );

  return Scrap_details;
};
