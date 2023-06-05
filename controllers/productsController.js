let db = require('../db/db')

let productsController = {
    index: function (req,res){

        return res.render ('products',{
            informacion : db.productos,
            informacionUsuario : db.lista
        })
    },
    add : function(req,res){
        return res.render ('product-add',{
            informacion : db.lista
        })
    },
};

module.exports = productsController;