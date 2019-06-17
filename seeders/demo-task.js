'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Tasks', [{
       title:"primera", ClienteId:1
      },{
        title:"primera",ClienteId:2
       },{
        title:"primera",ClienteId:3
       }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Tasks', null, {});
    
  }
};
