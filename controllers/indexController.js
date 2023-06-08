let db = require('../database/models');

//let db = require('../db/db');
//let op = db.Sequelize.Op;

let indexController = {
    index : function (req,res){
    // return res.render ('index', {
    //     informacion : db.productos
    // }) 

    let rel = {
        include: [
            {association: "usuario"}
        ]
    }
        db.Producto.findAll(rel)
            .then(function(usuarioAll){
                return res.send (usuarioAll)
            })
            .catch( function(error){
                console.log(error);
            })
    },
    search: function (req,res){
        return res.render ('search-results',{
            informacion : db.productos
        })
    }
};
module.exports = indexController;