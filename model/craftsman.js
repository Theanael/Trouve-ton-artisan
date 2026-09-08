const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Craftsman = sequelize.define('Craftsman', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    id_speciality:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    note:{
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    id_city:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    desciption:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(150),
        allowNull: false

    },
    website:{
        type: DataTypes.STRING(150),
        allowNull: true
    },
    top:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports=City
