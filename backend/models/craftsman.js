const { DataTypes } = require('sequelize');
const {sequelize} = require('../db/MySQL')

const Craftsman = sequelize.define('Craftsman',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    note:{
        type:DataTypes.DECIMAL(2, 1),
        allowNull:false,
        validate:{
            min:0,
            max:5
        }
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(150),
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    website:{
        type:DataTypes.STRING(150),
        allowNull:true,
        validate:{
            isUrl:true
        }
    },
    top:{
        type:DataTypes.BOOLEAN, 
        allowNull:false
    }
},
{
    timestamps:false,
    tableName:'craftsmen'
})

module.exports=Craftsman