let db = require('../db/db')
//let op = db.Sequelize.Op;
//let bcriptjs = require('bcryptjs');

let userController = {
    register: function (req,res){
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
    profile: function (req,res){
        return res.render ('profile',{
            informacion : db.lista,
            informacionProductos : db.productos
        })
    },
    edit: function(req,res){
        return res.render ('profile-edit',{
            informacion : db.lista,
        })
    },
    login: function (req,res){
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
    },store: function(req,res){
        let form = req.body
        return res.send(req.body)
         //Encriptar la contraseña antes de guardar en la base de datos.
        //  let user = {
        //     email: form.email,
        //     usuario: form.usuario,
        //     //contrasena: bcriptjs.hashSync(form.contrasena, 10),
        //     fechaNacimiento: form.fechaNacimiento,
        //     documento: form.documento,
        //     fotoPerfil: 'default-image.png'}

         //Usar un método de Sequelize para guardar datos.
        // db.User.create(user) //Pasar un objeto literal con los datos a guardar.
       //  .then(function(usuarioCreado){ //retorna el elemento creado
             //Dentro del then debería redireccionar a otra ruta.
          //   console.log(usuarioCreado);
                 // return res.send(form);
         //    return res.redirect('/');
       //  })
    //      .catch(function(e){
    //          console.log(e);
    //      })
         
    },processLogin: function(req,res){

    },logout: function(req,res){

    }    
};
module.exports = userController;