let db = require('../database/models');
let op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');
const session = require('express-session');

let productsController = {
    index: function (req,res){
        let idProducto = req.params.id
        db.Producto.findByPk (idProducto, {
            include: [
                {association: "usuario"}, {association: "comentario", include: [{association: "usuario"}]}
            ]
        })
        .then(function(resultado){ //resultado devuelve la informacion con la db que coincide con el id del producto
            //return res.send(resultado.comentario)
            comentario = resultado.comentario
            return res.render ('products', {resultado: resultado, comentario: comentario})
        })
        .catch(function(error){
            console.log(error);
        })
    },

    add: function(req,res){
        if (req.session.user) {
            return res.render("product-add")
        } else {
            return res.redirect("/user/login")
        }
        //return res.render ('product-add')
    },

    addForm: function(req,res){
        let form = req.body

        let producto = {
            usuario_id : req.session.user.id,
            nombreProducto : form.nombreProducto,
            descripcionProducto : form.descripcionProducto,
            imagenProducto : form.imagenProducto,
            fechaCarga : form.fechaCarga
        }

        db.Producto.create(producto)
        .then(function(resultado){
            //return res.send(resultado)
            if (req.session.user != undefined){
                return res.redirect('/')
            } else {
                return res.redirect('/user/login')
            }
        })
    }, 
    
    eliminarProducto: function(req,res) {
        let idProducto = req.params.id;
        let userId = req.session.user.id

        if (req.session.user != undefined){
            db.Producto.findByPk(idProducto, {
                include: [{association: 'usuario'}]
            })
            .then(function(resultado){
                if (resultado.usuario.id != req.session.user.id){ 
                    return res.send("No puedes eliminar este posteo")
                } else {
                    db.Producto.destroy({ 
                        where: {
                            id : idProducto
                        },
                        force : true //forzar la eliminación del objeto sin realizar ninguna verificación adicional
                    })
                    .then(function(resultado){
                        return res.redirect("/user/profile/" + userId)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
                }
            })
        } else {
            return res.redirect('/users/login')
        }
    }, 
    
    editar: function(req,res){
        if (req.session.user != undefined){
            let idProducto = req.params.id

            db.Producto.findByPk(idProducto, {
                include: [{association: 'usuario'}]
            }) 
            .then(function(resultado) {
                if (resultado != undefined) {
                    //return res.send (resultado)
                    if (resultado.usuario.id != req.session.user.id) {
                        return res.send("No puedes editar este post")
                    } else {
                        return res.render('product-edit', { resultado: resultado })
                    }
                } else {
                    return res.send("No existe el post")
                }
            })
            .catch(function(error) {
                return res.send(error)
            })
        } else {
            return res.redirect('/user/login')
        }
    }, 
    
    editarProducto: function(req,res){ //este metodo corresponde a la edicion de productos que viaja por POST
        let idProducto = req.params.id;

        if (req.session.user != undefined){
            db.Producto.findByPk(idProducto, {
                include: [{association: 'usuario'}]
            }) 
            .then(function(resultado) {
                if (resultado != undefined) {
                    //return res.send (resultado)
                    if (resultado.usuario.id != req.session.user.id) {
                        return res.send("No puedes editar este post")
                    } else {
                        let form = req.body
                        
                        let productEdit = {
                            usuario_id : req.session.user.id,
                            nombreProducto : form.nombreProducto,
                            descripcionProducto : form.descripcionProducto,
                            imagenProducto : form.imagenProducto,
                            fechaCarga : form.fechaCarga
                        }

                        if (form.nombreProducto == ""){
                            productEdit.nombreProducto = resultado.nombreProducto
                        }
                        if (form.descripcionProducto == ""){
                            productEdit.descripcionProducto = resultado.descripcionProducto
                        }
                        if (form.imagenProducto == ""){
                            productEdit.imagenProducto = resultado.imagenProducto
                        }

                        db.Producto.update(productEdit, {
                            where: {id: idProducto}
                        })
                        .then(function(resultado2){
                            return res.redirect("/products/" + resultado.id)
                        })
                        .catch(function (error) {
                            res.send(error)
                        })
                    }
                } else {
                    return res.send ("Lo sentimos, la publicación no existe")
                }
        })
        .catch(function(error){
            return res.send(error)
        })
        } 
    }, 
    
    comentario: function(req,res){
        let errors = {} //crear un lugar p. guardar mensajes de error

        if (req.session.user != undefined){
            let idProducto = req.params.id;
            let form = req.body

            let usuario_id = req.session.user.id;
            let comentario = req.body.comentario

            if (form.comentario == ""){
                errors.message = "El comentario esta vacío";
                res.locals.errors = errors;
                res.render('products')
            } else {
                let coment = {
                    usuario_id : usuario_id,
                    productos_id : idProducto,
                    comentario : comentario,

                }
                db.Comentario.create(coment, {
                    order: [
                        ['createdAt', 'DESC']
                    ]
                })
                .then(function(resultado){
                    return res.redirect ("/products/" + idProducto)
                })
            }

        } else {
            return res.redirect("/user/login")
        }
    }
};

module.exports = productsController;