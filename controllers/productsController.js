//let db = require('../db/db')
let db = require('../database/models');
let op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

let productsController = {
    index: function (req,res){
        let idProducto = req.params.id
        db.Producto.findByPk (idProducto, {
            include: [
                {association: "usuario"}, {association: "comentario"}
            ]
        })
        .then(function(resultado){ //resultado devuelve la informacion con la db que coincide con el id del producto
            //return res.send(resultado)
            comentario = resultado.comentario
            return res.render ('products', {resultado: resultado, comentario : comentario})

        })
        .catch(function(error){
            console.log(error);
        })
    },
    add : function(req,res){
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
                return res.redirect('/index')
            } else {
                return res.redirect('/user/login')
            }
        })

    }, eliminarProducto: function(req,res) {
        let idProducto = req.params.id;
        let userId = req.session.user.id

        if (req.session.user != undefined){
            db.Producto.findByPk(idProducto, {
                include: [{association: 'usuario'}]
            })
            .then(function(resultado){
                if (resultado.usuario.id != req.session.user.id){ //NO SE SI ESTA BUEN RESULTADO.USUARIO.ID
                    return res.send("No puedes eliminar este posteo")
                } else {
                    db.Producto.destroy({
                        where: {
                            id : idProducto
                        },
                        force : true
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
       
    }
};

module.exports = productsController;