var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');


//Rutas
router.get('/', indexController.index)
router.get('/search-results/:busqueda?', indexController.search)

module.exports = router;
