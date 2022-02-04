const sequelize = require('sequelize');

const connection = new sequelize('nodeperguntas', 'root', 'Netomi*',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;