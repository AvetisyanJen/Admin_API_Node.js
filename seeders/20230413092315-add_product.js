'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'test1',
        description: 'abcd',
        price: 1000,
        categoriId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test2',
        description: 'abcd',
        price: 1000,
        categoriId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test3',
        description: 'abcd',
        price: 1000,
        categoriId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test4',
        description: 'abcd',
        price: 1000,
        categoriId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test5',
        description: 'abcd',
        price: 1000,
        categoriId:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test6',
        description: 'abcd',
        price: 1000,
        categoriId:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};