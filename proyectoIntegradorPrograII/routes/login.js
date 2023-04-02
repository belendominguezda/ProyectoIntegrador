let express = require('express');
let router = express.Router();
let loginController = require ('../controllers/loginController')

//Rutas

router.get ('/', loginController.index)
router.get ('/logeado', loginController.logeado)

module.exports = router;