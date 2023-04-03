let express = require('express');
let router = express.Router();
let searchResultsController = require ('../controllers/searchResultsController');

//Rutas
router.get ('/:busqueda?', searchResultsController.index);


module.exports = router;