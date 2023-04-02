let express = require('express');
let router = express.Router();
let registerController = require ('../controllers/registerController')

//Rutas

router.get ('/', registerController.index)

module.exports = router;