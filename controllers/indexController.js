let db = require('../database/models');
let op = db.Sequelize.Op;

let indexController = {
    index : function (req,res){
    return res.render ('index', {
        informacion : db.productos
    })
    },
    search: function (req,res){
        return res.render ('search-results',{
            informacion : db.productos
        })
    }
};
module.exports = indexController;