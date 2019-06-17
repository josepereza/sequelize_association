'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Clientes', [{
        nombre: 'Jose Doe',
        poblacion: 'alguazas',
        saldo:200
        
        
      },{
        nombre: 'John Doe',
        poblacion: 'ceuti',
        saldo:200
       
      },{
        nombre: 'John martinez',
        poblacion: 'archena',
        saldo:200
      
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Clientes', null, {});
   
  }
};
