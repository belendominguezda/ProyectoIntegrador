let db = require('../db/db')

let profileController = {
    index: function (req,res){
        return res.render ('profile',{
            informacion : db.lista

        })
    },
    edit : function(req,res){
        return res.render ('profile-edit',{
            informacion : db.lista
        })
    },
};

module.exports = profileController;