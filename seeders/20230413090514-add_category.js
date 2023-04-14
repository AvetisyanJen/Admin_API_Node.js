'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
       name:"kathnaktherq",
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"xmichq",
         
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name:"tntesakan",
         
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        name:"qaxcraveniq",
         
         createdAt: new Date(),
         updatedAt: new Date(),
       },
      
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
