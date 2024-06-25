const Usuarios = require('../Models/Usuarios.js')
//CRUDAI
const httpUsuarios = {
    getListarTodo: async (req, res) => {
        try {
            const usuarios = await Usuarios.find();
            res.json(usuarios)
        } catch (error) {
            resizeBy.json({ message: error.message })
        }
    },

    postCrearUsuario: async (req, ref) => {
        const usuario = new Usuarios({
            email: req.body.email,
            contrasena: req.body.contrasena,
            nombre: req.body.nombre
        })
        try{
            const nuevoUsuario = usuario.save()
            res.json(nuevoUsuario)
        } catch (error) {
            res.json({ message: error.message })
        }
    },

    putActualizarUsuario: async (req, res) => {
        const { email } = req.params
        try{
            const usuarioActualizado = await Usuarios.findByIdAndUpdate(email, req.body);
            res.json({usuarioActualizado})
        } catch (error) {
            res.json({ message: error.message})
        }
    },

    putDesactivarUsuario: async (req, res) => {
        const { email } = req.params
        try{
            const usuarioDesactivado = await Usuarios.findByIdAndUpdate(email, req.body);
            res.json(usuarioDesactivado)
        } catch (error) {
            res.json({ message: error.message })
        }
    },

    putActivarUsuario: async (req, res) => {
        const { email } = req.params
        try{
            const usuarioActivado = await Usuarios.findByIdAndUpdate(email, req.params);
            res.json({usuarioActivado})
        } catch (error) {
            res.json({ message: error.message})
        }
    },

    deleteEliminarUsuario: async (req, res) => {
        const { email } = req.params
        try {
            const usuarioEliminado = Usuarios.findByIdAndDelete(email);
            res.json({ message: 'El usuario fue eliminado'})
        } catch (error) {
            res.json({ message: error.message})
        }
    }
}

module.exports = { httpUsuarios }