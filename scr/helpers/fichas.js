const Fichas = require('../Models/Fichas.js')

const FichasHelper = {
    Codigo: async (res, req) => {
        try {
            const existe = await Fichas.findOne({ codigo })
            if (existe)
                return res.status(400).json({ msg: 'El codigo ya existe' })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    },
    state: async (res, rew) => {
        const existe = await Fichas.findOne({ estado })
        if (estado != 1 || estado != 0) {
            throw new Error('el estado debe ser 1 o 0')
        }
    }
}


module.exports = { FichasHelper }