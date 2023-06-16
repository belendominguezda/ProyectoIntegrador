var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');


//Rutas
router.get('/', indexController.index);
router.get('/search-results/:busqueda?', indexController.search);
router.get ('/search-results/users', indexController.searchUser);

module.exports = router;
