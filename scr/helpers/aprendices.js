const Aprendices = require('../modelos/Aprendices')
const Fichas = require('./../Models/Fichas')

const aprendicesHelper = {
    existeAprendizID: async (documento, req) => {
        const existe = await Aprendices.findOne({ documento });
        if (!existe) {
            throw new Error(`El aprendiz con el documento ${documento} no existe`);
        }
        // req.aprendizbd = existe;
    },

    existeCodigoFicha: async (id_ficha, req) => {
        const existe = await Fichas.findOne({ id_ficha });
        if (!existe) {
            throw new Error(`La ficha con el id ${id_ficha} no existe`);
            }
    }
}

module.exports={aprendicesHelper}