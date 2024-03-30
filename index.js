const app=require('./src/App/app.js');

require("dotenv").config();
const port=process.env.PORT || 4000



app.use(require('./src/Router/Routes.js'))
app.listen(port,(error)=>{

    if(error){
        console.log(error)
    }

    console.log(`Servidor funcionando en el puerto ${port}`)
})

