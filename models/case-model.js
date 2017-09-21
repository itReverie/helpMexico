const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//create person model,  'case' => name of table = cases
var Case = sequelizeConnection.define('case', {
  tipoCaso: {
    type: Sequelize.STRING,
  },
  emergenciaDescripcion: {
  	type: Sequelize.STRING, 
  },
  cordenadasCaso: {
  	type: Sequelize.STRING, 
  }
});

module.exports = Case;








