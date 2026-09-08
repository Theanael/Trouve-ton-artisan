const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const City = sequelize.define('City', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    }
})

module.exports=City
