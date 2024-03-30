const app=require('./app.js');

require("dotenv").config();
var port=process.env.PORT || 4000



app.use(require('./Router/Routes.js'))
app.listen(port,(error)=>{

    if(error){
        console.log(error)
    }

    console.log(`Servidor funcionando en el puerto ${port}`)
})

