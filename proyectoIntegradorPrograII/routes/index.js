var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');


//Rutas
router.get('/', indexController.index )

module.exports = router;
