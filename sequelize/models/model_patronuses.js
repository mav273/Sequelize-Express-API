"use strict";
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const patronuses = sequelize.define(
    "patronuses",
    {
      id: {
        field: "id",
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      animal: {
        field: "animal",
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "patronuses",
    }
  );

  patronuses.associate = function (models) {};
  return patronuses;
};
