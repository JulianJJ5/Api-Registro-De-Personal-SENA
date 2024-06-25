/* const { Router } = require('express');
const mongoose = require('mongoose');
const { httpAprendiz } = require('../controllers/aprendices');
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos');
const { aprendicesHelpers } = require('../helpers/aprendices');
const router = Router()

router.get('listaAprendiz/:id_ficha')
check('id_ficha','la ficha no existe').isMongoId(),
check('idcliente').custom(aprendicesHelpers.id_ficha)

module.exports = router
 */