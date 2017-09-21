const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Case = require('../models/case-model');

//Case.sync will create the cases table
Case.sync({force: true})
//add the following Case to the database as a working test
.then((data) => Case.bulkCreate([
  {tipoCaso: 'DOCTOR',
  emergenciaDescripcion: 'We need all type of doctors ASAP Please!',
  cordenadasCaso: '16666, 546355'

}
]))
.catch((err) => console.log(err));


