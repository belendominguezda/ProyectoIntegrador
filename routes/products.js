let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController')

//Rutas

router.get ('/', productsController.index)
router.get ('/product-add', productsController.add)

router.post ('/product-add', productsController.addForm)


module.exports = router;