const app=require('./src/App/app.js');

require("dotenv").config();
app.set('port',process.env.PORT || process.env.PORTO || 4000)



app.use(require('./src/Router/Routes.js'))
app.listen(app.get('port'),(error)=>{

    if(error){
        console.log(error)
    }

    console.log(`Servidor funcionando en el puerto ${app.get('port')}`)
})

