const { Router } = require(`express`);
const { check } = require(`express-validator`);
const { validarCampos } = require(`./../middlewares/validar-campos`);
const { fichasHelper } = require(`./../helpers/fichas.js`);
const { httpFichas } = require(`./../Controllers/fichas.js`);
const router = Router()

router.get('/listartodo', httpFichas.getListarTodo);
router.get('/listarporcodigo/:id', httpFichas.getListarPorCodigo);

router.post('/crearficha',[
    check('codigo', 'El codigo solo debe contener caracteres numericos').isNumeric(),
    check('codigo', 'El codigo ingresado ya existe').custom(aprendicesHelper.Codigo),
    check('codigo', 'Todos los datos del formulario son obligatorios!').notEmpty(),
    check('nombre','ingrese su nombre').isEmpty(),
    check('nombre')
], httpFichas.postCrearFicha);

router.put('/actualizarficha', httpFichas.putActualizarFicha);
router.put('/activarficha', httpFichas.putActivarFichas);
router.put('/desactivarficha', httpFichas.putDesactivarFichas);


module.exports = router