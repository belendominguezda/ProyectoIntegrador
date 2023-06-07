let db = require('../database/models');
let op = db.Sequelize.Op;
//let bcrypt = require('bcryptjs');

let userController = {
    register: function (req,res){
       /*  let user = req.query.usuario;
        let contr = req.query.contrasena;
        console.log(user)

        if (user == null && contr == null){
            logeado = false
        } else{
            logeado = true
        } */
        return res.render ('register',{
            //logeado : logeado,
            //informacion : db.lista
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

        let user = {
            email : form.email,
            usuario : form.usuario,
          //contrasena : bcriptjs.hashSync(form.contrasena, 10),
            fechaNacimiento : form.fechaNacimiento,
            documento : form.documento,
            fotoPerfil : 'default-image.png'}
        
        //Mandar mensaje de los errores
        let buscaEmail = {
            where: [{email: user.email}]
        }
        db.Usuario.findOne(buscaEmail)
            .then (function(resultado){
                let errors = {};
            if (user.email == ""){
                errors.message = "El email está vacío";
                res.locals.errors = errors;
                return res.render ('register');
            } /* else if (user.contrasena.length < 3){
                errors.message = "La clave debe tener como mínimo 3 caracteres"
                res.locals.errors = errors;
                return res.render ('register');
            } */ else if (user.usuario == ""){
                errors.message = "El campo del usuario es obligatorio"
                res.locals.errors = errors;
                return res.render ('register');}
            })
        
         //Encriptar la contraseña antes de guardar en la base de datos.
        

        //Buscar el usuario en la db    

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