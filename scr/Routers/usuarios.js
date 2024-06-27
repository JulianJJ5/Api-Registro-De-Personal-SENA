const { Router } = require(`express`);
const { check } = require(`express-validator`);
const { validarCampos } = require(`./../middlewares/validar-campos`);
const { usuariosHelper } = require(`./../helpers/usuarios.js`);
const { httpUsuarios } = require(`./../Controllers/usuarios.js`);
const { validarJWT } = require('./../middlewares/validarJWT.js')
const router = Router()

router.get('/listartodo', httpUsuarios.getListarTodo);

router.post('/crearusuario',[
    check('email', 'El email es obligatorio').notEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('contrasena', 'El campo de contraseña es obligatorio').notEmpty(),
    check('nombre','El nombre es obligatorio').notEmpty(),
    check('estado', 'El campo estado solo acepta valores numericos').isNumeric(),
    validarJWT, validarCampos
], httpUsuarios.postCrearUsuario);

router.put('/actualizarusuario/:id', [
    check('email', 'El email es obligatorio').notEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('contrasena', 'El campo de contraseña es obligatorio').notEmpty(),
    check('nombre','El nombre es obligatorio').notEmpty(),
    check('estado', 'El campo estado solo acepta valores numericos').isNumeric(),
    validarJWT, validarCampos
], httpUsuarios.putActualizarUsuario);
router.put('/activarusuario/:id', [], httpUsuarios.putActivarUsuario);
router.put('/desactivarusuario/:id', [], httpUsuarios.putDesactivarUsuario);

router.delete('/eliminarusuario/:id', httpUsuarios.deleteEliminarUsuario);


module.exports = router