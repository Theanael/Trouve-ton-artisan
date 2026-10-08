const { DataTypes } = require('sequelize');
const {sequelize} = require('../db/MySQL')

const City = sequelize.define('city',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(150),
        allowNull:false
    }
},
{
    timestamps:false
})

module.exports=City