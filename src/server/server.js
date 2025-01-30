const express = require('express')
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public' } = options
   /*  console.log(port)
    console.log(public_path) */
    const app= express()
// para poder usar midlewares se usa la palabra use (en express)
    app.use(express.static(public_path))// contenido estatico que ponemos disponible
    // req es peticion y res es respuesta y recibe cualquier dato para ver en  
    app.get('*',(req,res)=>{
        const indexpath= path.join(__dirname + `../../../${public_path}/index.html`) //join es para hacer disponible y junta todos los argumentos en un solo pad
        res.sendFile(indexpath)// respuesta del servidor enviar lo que esta en carpeta public o index path sirve para react y angular
    } ) 

    app.listen(port, ()=>{
        console.log(`escuchando en el puerto ${port}`)
    }) //es para escuchar por el puerto 
}
module.exports={
    startServer
}
