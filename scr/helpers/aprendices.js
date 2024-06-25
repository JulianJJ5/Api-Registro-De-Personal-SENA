const Aprendices = require('../modelos/Aprendices')

const aprendicesHelper = {
    fichas: async (res, req) => {
        const { id_ficha } = req.params
        try {
            const existe = await Aprendices.findOne({ id_ficha })
            if (existe) {
                throw new Error('id ya existente')
            }
        }catch(error){res.status(404).json({message:"no se encontro el aprendiz"})}
    }
}