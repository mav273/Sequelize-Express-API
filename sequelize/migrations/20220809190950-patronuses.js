"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("patronuses", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      animal: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("patronuses");
  },
};
