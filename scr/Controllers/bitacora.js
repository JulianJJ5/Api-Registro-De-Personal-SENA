const Bitacoras = require('../Models/Bitacora.js')
const Aprendices = require('../Models/Aprendices.js');

const httpBitacora = {
    getListarTodoEntreFechas: async (req, res) => {
        const { fecha_Inicio, fecha_Fin } = req.body;
        try {
            const bitacora = await Bitacoras.find({
                fecha: {
                    $gte: new Date(fecha_Inicio),
                    $lte: new Date(fecha_Fin)
                }
            });
            res.json(bitacora)
        } catch (error) {
            res.json({ message: error.message })
        }
    },

    getListarPorFichaEntreFechas: async (req, res) => {
        const { id_ficha } = req.params;
        const { fechaInicio, fechaFin } = req.body;
        try {
            const aprendices = await Aprendices.find({ id_ficha });

            //Aquí se hace un array con los id de los aprendices:
            const ids_Aprendiz = aprendices.map(aprendiz => aprendiz._id);

            const bitacoras = await Bitacoras.find({
                id_aprendiz: { $in: ids_Aprendiz },
                fecha: {
                    $gte: new Date(fechaInicio),
                    $lte: new Date(fechaFin)
                }
            });
            res.json(bitacoras);
        } catch (error) {
            res.json({ message: error.message });
        }
    },

    getListarPorAprendizEntreFechas: async (req, res) => {
        const {id_aprendiz} = req.params;
        const {fechaInicio, fechaFin} = req.body;
        try {
            const aprendices = await Aprendices.find(id_aprendiz)
            const ids_Aprendiz = aprendices.map(aprendiz => aprendiz._id);
            const bitacoras = await Bitacoras.find({
                id_aprendiz: { $in: ids_Aprendiz },
                fecha: { 
                    $gte: new Date(fechaInicio),
                    $lte: new Date(fechaFin) 
                    }
            });
            res.json({ bitacoras })
        } catch (error) {
            res.json({ message: error.message })
        }
    }




}

module.exports = { httpBitacora };