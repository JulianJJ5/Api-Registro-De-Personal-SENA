const Aprendices = require('../Models/Aprendices.js')
const Fichas = require('./../Models/Fichas.js')

const aprendicesHelper = {
    existeAprendizID: async (documento) => {
        const existe = await Aprendices.findOne({ documento });
        if (!existe) {
            throw new Error(`El aprendiz con el documento ${documento} ya existe`, existe);
        }
    },

    existeCodigoFicha: async (id_ficha, req) => {
        const existe = await Fichas.findOne({ id_ficha });
        if (!existe) {
            throw new Error(`La ficha con el id ${id_ficha} no existe`);
            }
    }
}

module.exports = {aprendicesHelper}