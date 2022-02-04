const text = require('body-parser/lib/types/text');
const sequelize = require('sequelize');
const connection = require('./database');

const question = connection.define('questions',{
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    description:{
        type: sequelize.TEXT,
        allowNull: false
    }
});

question.sync({force: false}).then(()=>{});