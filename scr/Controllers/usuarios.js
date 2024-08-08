const Usuarios = require('../Models/Usuarios.js')
const bcryptjs = require("bcryptjs")
const {generarJWT} = require ("../middlewares/validarJWT")
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

    postCrearUsuario: async (req, res) => {
        try{
            const { nombre, email, contrasena } = req.body;
            const usuario = new Usuarios({ email, contrasena, nombre });
            const salt = bcryptjs.genSaltSync(10);
            usuario.contrasena = bcryptjs.hashSync(contrasena, salt);
            await usuario.save()
            res.json(usuario)

        } catch (error) {
            res.json({ message: error.message })
        }
    },

    postLoginUsuario: async (req, res) => {
        const { email, contrasena } = req.body;
        try {
            const user = await Usuarios.findOne({ email })
            if (!user) {
                return res.status(401).json({
                    msg: "Usuario / Password no son correctos1"
                })
            }

            if (user.estado === 0) {
                return res.status(401).json({
                    msg: "Usuario / Password no son correctos2"
                })
            }

            const validPassword = bcryptjs.compareSync(contrasena, user.contrasena);
            if (!validPassword) {
                return res.status(401).json({
                    msg: "Usuario / Password no son correctos"
                }); 
                
            }

            const token = await generarJWT(user._id);

            res.json({
                usuario: user,
                token
            })
        } catch (error) {
            return res.json({ message: error.message })
        }
    },

    putActualizarUsuario: async (req, res) => {
        const { _id } = req.params
        try{
            const usuarioActualizado = await Usuarios.findByIdAndUpdate(_id, req.body);
            if (!usuarioActualizado) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json({ usuarioActualizado });
        } catch (error) {
            res.json({ message: error.message})
        }
    },

    putDesactivarUsuario: async (req, res) => {
        const { id } = req.params
        try{
            const usuarioDesactivado = await Usuarios.findByIdAndUpdate(id, {estado: 0});
            res.json(usuarioDesactivado)
        } catch (error) {
            res.json({ message: error.message })
        }
    },

    putActivarUsuario: async (req, res) => {
        const { id } = req.params
        try{
            const usuarioActivado = await Usuarios.findByIdAndUpdate(id, {estado: 1});
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