let db = require('../database/models');
let op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

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
                //return res.send (usuarioAll)
            })
            .catch( function(error){
                console.log(error);
            })
            return res.render ('index')
    },
    search: function (req,res){
        let formBusqueda = req.query.search

        db.Producto.findAll({
                where: {
                    [op.or]:[
                    {
                        nombreProducto: {
                            [op.like]:  `%${formBusqueda}%`
                        }
                    },

                    {
                        descripcionProducto: {
                            [op.like]: `%${formBusqueda}%`
                        }
                    }
                ]},
                order: [
                    ['createdAt', 'ASC']
                ],
                include: [
                    {association: "usuario"},{association: "comentario"}
                ]
    
            })
                .then(function(resultado){
                    if (resultado.length > 0){
                        res.render('search-results', {info: resultado});
                    } else {
                        res.send("No encontramos resultados a su busqueda")
                    }
                })

    },
    searchUser: function (req,res){

    }
}

module.exports = indexController;
