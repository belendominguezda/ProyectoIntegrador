let db = require('../db/db')

let searchResultsController = {
    index: function (req,res){
        return res.render ('search-results',{
            informacion : db.productos
        })
    },
}
module.exports = searchResultsController;