let express = require('express');
let router = express.Router();
let userController = require ('../controllers/userController')

//Rutas

router.get ('/register', userController.register);
router.get ('/profile', userController.profile);
router.get ('/profile/profile-edit', userController.edit);
router.get ('/login', userController.login);



module.exports = router;