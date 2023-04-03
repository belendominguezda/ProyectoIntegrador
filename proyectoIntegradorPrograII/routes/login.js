let express = require('express');
let router = express.Router();
let loginController = require ('../controllers/loginController')

//Rutas

router.get ('/', loginController.index)

module.exports = router;