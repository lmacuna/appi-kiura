const Route=require("express").Router()
const cors =require("cors")
const multer=require("multer")
const morgan=require("morgan")
const { getUsuarios, postUsuario, validarAdmin, verificarUsuario, agregarEmpleo, getEmpleos, prueba } = require("../Controller/usuarios.controller")


Route.use(cors())
Route.use(morgan('dev'))
Route.use(multer().any())


Route.get('/',prueba)
//INSERTAR USUARIO
Route.post('/usuarios',postUsuario)

//OBTENER USUARIOS
Route.get('/usuarios',getUsuarios)

//VALIDAR ADMIN BUSCAR EN LA BASE DE DATOS
Route.post('/admin',validarAdmin)

//AGREGAR EMPLEO
Route.post('/empleo',verificarUsuario,agregarEmpleo)

//OBTENER TODOS LOS EMPLEOS
Route.get('/empleos',verificarUsuario,getEmpleos)

module.exports=Route;

