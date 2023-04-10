let db = require('../db/db')
let loginController = {
    index: function (req,res){
        //Capturo el valor de 'usuario' y 'contraseña'

        //NO SE SI ESTO VA
        //usuario = document.getElementById("usuario").value;
        //contrasena = document.getElementById("contrasena").value;

        let user = req.query.usuario;
        let contr = req.query.contrasena;
        console.log(user)

        if (user == null && contr == null){
            logeado = false
        } else{
            logeado = true
        }
        return res.render ('login',{
            logeado : logeado,
            informacion : db.lista
        })
    }    
    }

module.exports = loginController


