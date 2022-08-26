"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "patronuses",
      [
        {
          id: 1,
          animal: "Deer",
        },
        {
          id: 2,
          animal: "Phoenix",
        },
        {
          id: 3,
          animal: "Cat",
        },
        {
          id:4,
          animal: "Wolf",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patronuses", null, {});
  },
};
