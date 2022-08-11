"use strict";
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const wizards = sequelize.define(
    "wizards",
    {
      id: {
        field: "id",
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        field: "name",
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      knowHow: {
        field: "knowHow",
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      corporeal_id: {
        field: "corporeal_id",
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt:{
        field: "createdAt",
        type: Sequelize.DATE,
        allowNull:true
      },
    },
    {
      timestamps: false,
      tableName: "wizards",
    }
  );

  wizards.associate = function (models) {};
  return wizards;
};
