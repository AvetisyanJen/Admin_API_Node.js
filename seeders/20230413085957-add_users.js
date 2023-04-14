'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'Ani',
        password:"ani",
     
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'Karen',
        password:"karen",
     
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'Anna',
        password:"anna",
     
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};