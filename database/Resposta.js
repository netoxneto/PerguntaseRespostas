const sequelize = require('sequelize');
const connection = require('./database');

const respostion = connection.define('resps',{
    questionId:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    corpo:{
        type: sequelize.TEXT,
        allowNull: false
    }
});

respostion.sync({force:false}).then(()=>{});

module.exports = respostion;