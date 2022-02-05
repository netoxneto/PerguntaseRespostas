const sequelize = require('sequelize');

const connection = new sequelize('nodeperguntas', 'root', '12345678',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;