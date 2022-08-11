"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "wizards",
      [
        {
          name: "Harry",
          knowHow: true,
          corporeal_id: 1,
          createdAt: '1994-08-25'
        },
        {
          name: "Snape",
          knowHow: true,
          corporeal_id: 1,
        },
        {
          name: "Albus Dumbledore",
          knowHow: true,
          corporeal_id: 2,
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("wizards", null, {});
  },
};
