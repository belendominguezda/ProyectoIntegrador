let db = require('../db/db')

let productsController = {
    index: function (req,res){

        return res.render ('products',{
            informacion : db.productos,
            informacionUsuario : db.lista
        })
    },
    add : function(req,res){
        return res.render ('product-add')
    },
    addForm: function(req,res){
        let form = req.body

        let producto = {
            nombreProducto : form.nombreProducto,
            descripcionProducto : form.descripcionProducto,
            fechaCarga : form.fechaCarga
        }

        db.Producto.create(producto)
        .then(function(resultado){
            return res.redirect('/user/profile')
        })

    }
};

module.exports = productsController;