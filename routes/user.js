let express = require('express');
let router = express.Router();
let userController = require ('../controllers/userController')

//Rutas
router.get ('/register', userController.register);
router.get ('/profile/:id', userController.profile);
router.get ('/profile/:id/profile-edit', userController.edit);
router.get ('/login', userController.login);

router.post('/register', userController.store); //guarda al usuario en la DB
router.post('/login', userController.processLogin); //redirige al login si el usuario esta logeado
router.post('/logout', userController.logout); //redirige al index

module.exports = router;