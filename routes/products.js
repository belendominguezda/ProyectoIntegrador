let express = require('express');
let router = express.Router();
let productsController = require ('../controllers/productsController')

//Rutas

router.get ('/product-add', productsController.add);
router.get ('/:id', productsController.index);
router.get("/product-edit/:id", productsController.editar);


router.post ('/product-add', productsController.addForm); //Ruta para agregar un producto
router.post("/:id", productsController.eliminarProducto); //Ruta para eliminar un producto
router.post("/comentario/:id", productsController.comentario);
router.post("/product-edit/:id", productsController.editarProducto);



module.exports = router;