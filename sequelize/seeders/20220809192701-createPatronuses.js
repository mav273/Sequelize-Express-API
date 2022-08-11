"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "patronuses",
      [
        {
          animal: "Deer",
        },
        {
          animal: "Phoenix",
        },
        {
          animal: "Cat",
        },
        {
          animal: "Wolf",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patronuses", null, {});
  },
};
