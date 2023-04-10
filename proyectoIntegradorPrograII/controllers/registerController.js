let db = require('../db/db')
let registerController = {
    index: function (req,res){
        let user = req.query.usuario;
        let contr = req.query.contrasena;
        console.log(user)

        if (user == null && contr == null){
            logeado = false
        } else{
            logeado = true
        }
        return res.render ('register',{
            logeado : logeado,
            informacion : db.lista
        })
    },
};
module.exports = registerController;