const {Usuario,Empleo}= require('../Model/model.js')




const prueba=(req,res)=>{
    try {
        return res.send("recibido")
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message })
    }
}


const postUsuario = async (req, res) => {
    try {

        var { user, password, rol } = req.body
        await Usuario.sync()

        const CreateUsuarios = await Usuario.create({
            user,
            password,
            rol


        })
       
        return (res.status(201), res.json({ "data": "Insertado correctamente" }))
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message })
    }

}


const getUsuarios = async (req, res) => {


    try {
        var data = await Usuario.findAll()

        return await res.json({ "data": data })
    } catch (error) {
        return await res.sendStatus(500).json({ message: error.message })
    }
}


const validarAdmin=async(req,res)=>{

    try {
        var{ user,password}=req.body

        console.log(user + "  "+password)
        var data = await Usuario.findOne({
            where: {
                user,
                password,
            },
          })
          return (data?res.json({ "data":"Zx12hjk77mVyr001aPlñMb"}):res.json({ "message": "admin inexistente"}))

        
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message })
    }
}


const verificarUsuario=(req,res,next)=>{

    var {token}=req.headers['authorization']
    if(!token==="Zx12hjk77mVyr001aPlñMb"){
     return res.json({"message":"access denied"})
    }else{
        next()
    }

}



const agregarEmpleo=async(req,res)=>{
    try {

       
        var {titulo,empresa,descripcion,requisitos, horario,beneficios}=req.body

        await Empleo.sync()

        const nuevoEmpleo=await Empleo.create({
            titulo,
            empresa,
            descripcion,
            requisitos,
            horario,
            beneficios
        })

     console.log(nuevoEmpleo)
        return res.json({"data":"agregado correctamente"})
    } catch (error) {
           return res.sendStatus(500).json({message:error.message})
    }
}


const getEmpleos=async(req,res)=>{


    try {
        
        const empleos=await Empleo.findAll()


        return res.json({"data":empleos})
    } catch (error) {
        return res.sendStatus(500).json({message:error.message})
    }

}

module.exports = { getUsuarios, postUsuario,validarAdmin,verificarUsuario,agregarEmpleo,getEmpleos }