const express=require('express')
const cors =require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Usuarios = require('./scr/Routers/usuarios')
const Fichas = require('./scr/Routers/fichas')
const Aprendices = require('./scr/Routers/aprendices') 
const Bitacoras = require('./scr/Routers/bitacora')

const app= express()


app.use(cors())
app.use(express.json())

app.use('/api/Usuarios', Usuarios)
app.use('/api/Fichas', Fichas)
app.use('/api/Aprendices', Aprendices)
app.use('/api/bitacoras', Bitacoras)


app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log('Connected!')); 
});