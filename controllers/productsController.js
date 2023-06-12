//let db = require('../db/db')
let db = require('../database/models');
let op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

let productsController = {
    index: function (req,res){
        return res.render ('products',{})
    },
    add : function(req,res){
        return res.render ('product-add')
    },
    addForm: function(req,res){
        let form = req.body

        let producto = {
            usuario_id : form.usuario_id,
            nombreProducto : form.nombreProducto,
            descripcionProducto : form.descripcionProducto,
            imagenProducto : form.imagenProducto,
            fechaCarga : form.fechaCarga
        }

        db.Producto.create(producto)
        .then(function(resultado){
            //return res.send(resultado)
            return res.redirect('/index')
        })

    }
};

module.exports = productsController;