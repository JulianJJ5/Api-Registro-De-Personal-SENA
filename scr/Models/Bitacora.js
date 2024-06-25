const mongoose = require('mongoose');
const { type } = require('os');

const bitacoraSchema = new mongoose.Schema({
    id_aprendiz: {type: mongoose.Schema.Types.ObjectId, ref: 'Aprendiz'},
    fecha: {type:Date, required:true},
})

module.exports= mongoose.model("Bitacoras", bitacoraSchema)