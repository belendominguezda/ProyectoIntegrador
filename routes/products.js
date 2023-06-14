let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController')

//Rutas

router.get ('/:id', productsController.index)
router.get ('/product-add', productsController.add)

router.post ('/product-add', productsController.addForm) //Ruta para agregar un producto
router.post("/:id", productsController.eliminarProducto); //Ruta para eliminar un producto



module.exports = router;