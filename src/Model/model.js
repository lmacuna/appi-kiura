const { Sequelize, DataTypes, Model } = require("sequelize");

require("dotenv").config()

const sequelize = new Sequelize(process.env.DATA_BASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.PUERTO
})

class Usuario extends Model {

}
class Empleo extends Model{

}
Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING, 
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Usuario'
})



Empleo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    requisitos: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    horario: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    beneficios: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
  
}, {
    sequelize,
    modelName: 'Empleo'
})


 async function testConection(){
try {
   await sequelize.authenticate()
   console.log("All Good!!")
} catch (error) {
    console.error("All bad",error)
}

}

testConection() 
module.exports={Usuario,Empleo};