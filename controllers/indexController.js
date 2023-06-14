let db = require('../database/models');
let op = db.Sequelize.Op;
let bcrypt = require('bcryptjs');

let indexController = {
    index : function (req,res){
        db.Producto.findAll({
            include: [
                {association: "usuario"}, {association: "comentario"}
            ],
            order: [
                ['createdAt' , 'DESC']
            ]
        })
            .then(function(productoAll){
                //return res.send (productoAll)
                return res.render ('index' , {info : productoAll})

            })
            .catch( function(error){
                console.log(error);
            })
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
                    //return res.send(resultado)
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
