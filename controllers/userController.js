let db = require('../database/models');
let op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

let userController = {
    register: function (req,res){
        return res.render ('register',{
        })
    },
    profile: function (req,res){
        let idUsuario = req.params.id

        db.Usuario.findByPk (idUsuario, {
            include: [
                {association: "productos"}
                ],
                order: [
                    ['createdAt', 'ASC']
                ]
        })
        .then(function(resultado){
            if (resultado != undefined){
                //return res.send(resultado)
                 if (resultado.productos.length == 0){
                    let errors = {}
                    errors.message = "El usuario no ha publicado productos";
                    res.locals.errors = errors;
                    return res.render('profile', {usuario : resultado})

                } else{
                    productos = resultado.productos
                    return res.render('profile', {usuario : resultado, productos : productos}) 
                }
            } else {
                return res.send ("Lo sentimos, no encontramos al usuario")
            }
            
        })
        .catch(function(error){
            console.log(error);
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
            dni = form.dni;
            imagenPerfil = form.imagenPerfil;

        //Mandar mensaje de los errores
        let buscaEmail = {
            where: [{email: email}]
        }
        db.Usuario.findOne(buscaEmail)
            .then (function(resultado){
                let errors = {};
            if (email == ""){
                errors.message = "El campo de email es obligatorio";
                res.locals.errors = errors;
                return res.render ('register');
            } else if (contrasena == ""){
                errors.message = "El campo de la clave es obligatorio"
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
                    dni : form.dni,
                    imagenPerfil : form.imagenPerfil,
                }
                db.Usuario.create(user)
                .then(function(resultado){
                    //return res.redirect ('/');
                    return res.redirect('/user/login')
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
                        //Lo pongo en session
                        req.session.user = resultado

                        if (req.body.recordarme != undefined){
                            res.cookie('cookieEspecial', 'resultado.id', {maxAge: 100*60*15});
                        }
                        return res.redirect ('/')
                    } else {
                        errors.message = "La contraseña es incorrecta";
                        res.locals.errors = errors;
                        return res.render ('login');
                    } 
                } else if (email == null) {
                    errors.message = "El campo de email es obligatorio";
                    res.locals.errors = errors;
                    return res.render ('login')
                } else if (contrasena == null){
                    errors.message = "El campo de email es obligatorio";
                    res.locals.errors = errors;
                    return res.render ('login')
                }  else {
                    errors.message = "No te encontramos :("
                    res.locals.errors = errors;
                    return res.render ('login')
                } 
            
            }) .catch(function(error){
                console.log(error);
            })
    },logout: function(req,res){
        //Destruyo la session
        req.session.destroy();
        //Destruyo la cookie
        res.clearCookie('cookieEspecial')

        return res.redirect('/');

    }, editar: function(req,res){
        if (req.session.user != undefined){
            let idUsuario = req.params.id

            db.Usuario.findByPk(idUsuario) 
            .then(function(resultado) {
                if (resultado != undefined) {
                    //return res.send (resultado)
                    if (resultado.id != req.session.user.id) {
                        return res.send("No puedes editar este perfil")
                    } else {
                        return res.render('profile-edit', { resultado: resultado })
                    }
                } else {
                    return res.send("No existe el usuario")
                }
            })
            .catch(function(error) {
                return res.send(error)
            })
            
        } else {
            return res.redirect('/user/login')
        }


    }, editarUsuario: function(req,res){
        let idUsuario = req.params.id;
        let errors = {};

        if (req.session.user != undefined){
            db.Usuario.findByPk(idUsuario) 
            .then(function(resultado) {
                if (resultado != undefined) {
                    //return res.send (resultado)
                    if (resultado.id != req.session.user.id) {
                        return res.send("No puedes editar este perfil")
                    } else {
                        let form = req.body
                        
                        let usuarioEdit = {
                            usuario_id : req.session.user.id,
                            email : form.email,
                            usuario : form.usuario,
                            contrasena : form.contrasena,
                            fechaNacimiento : form.fechaNacimiento,
                            dni : form.dni,
                            imagenPerfil : form.imagenPerfil
                        }

                        if (form.email == ""){
                            usuarioEdit.email = resultado.email
                        }
                        if (form.usuario == ""){
                            usuarioEdit.usuario = resultado.usuario
                        }
                        if (form.contrasena == ""){
                            usuarioEdit.contrasena = resultado.contrasena
                        }
                        if (form.fechaNacimiento == ""){
                            usuarioEdit.fechaNacimiento = resultado.fechaNacimiento
                        }
                        if (form.dni == ""){
                            usuarioEdit.dni = resultado.dni
                        }
                        if (form.imagenPerfil == ""){
                            usuarioEdit.imagenPerfil = resultado.imagenPerfil
                        }
                        if(form.contrasena.length > 0 && form.contrasena.length < 3){
                            errors.message = "La contraseña debe tener más de 3 caracteres."
                            res.locals.errors = errors;
                            return res.render('profile-edit', {resultado: resultado})

                        }                    

                        db.Usuario.update(usuarioEdit, {
                            where: {id: idUsuario}
                        })
                        .then(function(resultado2){
                            return res.redirect("/user/profile/" + resultado.id)
                        })
                        .catch(function (error) {
                            res.send(error)
                        })
                    }
                } else {
                    return res.send ("Lo sentimos, el perfil no existe")
                }
        })
        .catch(function(error){
            return res.send(error)
        })
        }


    }     
};

module.exports = userController;