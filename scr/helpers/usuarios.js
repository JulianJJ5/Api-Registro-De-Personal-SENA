const User = require('../Models/Usuarios.js')

const UserHelper = {
    state: async (res, rew) => {
        const existe = await User.findOne({ estado })
        if (estado != 1 || estado != 0) {
            throw new Error('el estado debe ser 1 o 0')
        }
    }
}


module.exports = { UserHelper }