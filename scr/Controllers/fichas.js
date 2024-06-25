const Fichas = require('../Models/Fichas')

// CRUIA

const httpFichas = {
    getListarTodo: async (req, ref) => {
        try {
            const fichas = await Fichas.find()
            res.json(fichas)
        } catch (error) {
            res.json({ message: error.message })
        }
    },

    getListarPorCodigo: async (req, ref) => {
        const { codigo } = req.params
        try {
            const fichas = await Fichas.find({ codigo });
            res.json(fichas)
        } catch (error) {
            res.json({ message: error.message })
        }
    },

    postCrearFicha: async (req, res) => {
        const ficha = new Fichas({
            codigo: req.body.codigo,
            nombre: req.body.nombre
        });
        try {
            const nueva_Ficha = await ficha.save();
            res.json(nueva_Ficha)
        } catch (error) {
            res.json({ message: error.message })
        }
    },

    putActualizarFicha: async (req, ref) => {
        const { codigo } = req.params
        try {
            const fichaActualizada = await Fichas.findByIdAndUpdate(codigo, req.body, { new: true });
            res.json(fichaActualizada)
        } catch (error) {
            res.json({ message: message.error })
        }
    },

    putDesactivarFichas: async (req, res) => {
        const { codigo } = req.params
        try {
            const ficha = await Fichas.findByIdAndUpdate(codigo, {estado: 0})
            res.json(ficha)
        } catch (error){
            res.json({ message: error.message})
        }
    },

    putActivarFichas: async (req, res) => {
        const { codigo } = req.params
        try {
            const ficha = await Fichas.findByIdAndUpdate(codigo, {estado: 1})
            res.json(ficha)
        } catch (error) {
            res.json({ message: error.message})
        }
    }


}

module.exports = { httpFichas }