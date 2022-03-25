const express = require('express')
const app = express()
const PORT = 8080

const Container = require('./clase_4.js')

const listado = new Container('./productos.txt')

app.get('/productos',(req,res) => {
    listado.getAll().then(resp => res.send(resp))
})

app.get('/productoRandom', (req,res) => {
    listado.getAll().then(resp => res.send(
        resp[Math.floor(Math.random()*resp.length)]        
    ))
})

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`);
})
server.on('error', error => console.log(`Error en el servidor: ${error}`))