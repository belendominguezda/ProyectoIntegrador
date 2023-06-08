let db = require('../database/models');
let op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

let userController = {
    register: function (req,res){
        return res.render ('register',{

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
        if (req.session.user != undefined){
            return res.redirect ('/')
        } else{
            return res.render ('login')
        }
    },store: function(req,res){
        let form = req.body

            email = form.email;
            usuario = form.usuario;
            contrasena = form.contrasena;
            fechaNacimiento = form.fechaNacimiento;
            documento = form.documento;

        //Mandar mensaje de los errores
        let buscaEmail = {
            where: [{email: email}]
        }
        db.Usuario.findOne(buscaEmail)
            .then (function(resultado){
                let errors = {};
            if (email == ""){
                errors.message = "El email está vacío";
                res.locals.errors = errors;
                return res.render ('register');
            } else if (contrasena.length < 3){
                errors.message = "La clave debe tener como mínimo 3 caracteres"
                res.locals.errors = errors;
                return res.render ('register');
            } else if (usuario == ""){
                errors.message = "El campo del usuario es obligatorio"
                res.locals.errors = errors;
                return res.render ('register');
            } else if (resultado != null){
                errors.message = "El email ya ha sido utilizado."
                res.locals.errors = errors;
                return res.render('register')

            } else {
                let user = {
                    email : form.email,
                    usuario : form.usuario,
                    contrasena: bcrypt.hashSync(contrasena, 10),
                    fechaNacimiento : form.fechaNacimiento,
                    documento : form.documento,
                    //FOTO DE PERFIL
                }
                db.Usuario.create(user)
                .then(function(resultado){
                    return res.redirect ('/user/profile');
                })
                .catch(function(error){
                    console.log(error);
                })
            }
            })
             
    },processLogin: function(req,res){
        //buscar los datos de la db 
        let email = req.body.email;
        let contrasena = req.body.contrasena

        let busca = {
            where : [{email : email}]
        };

        db.Usuario.findOne(busca)
            //return res.send(busca)
            .then(function(resultado){
                let errors = {};
                if (resultado != null){
                    let contra = resultado.contrasena
                    let contrasenaCorrecta = bcrypt.compareSync(contrasena, contra)
                    if (contrasenaCorrecta == true){
                        //lo pongo en session
                        req.session.user = resultado

                        if (req.body.recordarme != undefined){
                            res.cookie('cookieEspecial', 'resultado.id', {maxAge: 100*60*15});
                        }
                        return res.redirect ('/')
                    } else {
                        errors.message = "El mail ya existe y no encontramos la contrasena";
                        res.locals.errors = errors;
                        return res.render ('login');
                    } 
                } else {
                    errors.message = "No te estamos encontrando"
                    res.locals.errors = errors;
                    return res.render ('login')
                }
            
            }) .catch(function(error){
                console.log(error);
            })

        //ponerlos en session 

        //y si el usuario quiere, agregar cookie para que lo recuerde 
    },logout: function(req,res){

    }    
};
module.exports = userController;