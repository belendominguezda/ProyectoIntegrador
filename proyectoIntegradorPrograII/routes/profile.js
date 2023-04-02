let express = require('express');
const profileController = require('../controllers/profileController');
let router = express.Router();

//Rutas
router.get ('/', profileController.index)
router.get ('/profile-edit', profileController.edit)

module.exports = router;