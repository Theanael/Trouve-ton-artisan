const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Speciality = sequelize.define('Seciality', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    id_category: {
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports=Speciality
