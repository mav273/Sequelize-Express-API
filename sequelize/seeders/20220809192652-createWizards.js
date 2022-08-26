"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "wizards",
      [
        {
          id: 1,
          name: "Harry",
          knowHow: true,
          corporeal_id: 1,
          createdAt: "1994-08-25",
        },
        {
          id: 2,
          name: "Snape",
          knowHow: true,
          corporeal_id: 1,
        },
        {
          id: 3,
          name: "Albus Dumbledore",
          knowHow: true,
          corporeal_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("wizards", null, {});
  },
};
