let loginController = {
    index: function (req,res){
        return res.render ('login')
    },
    logeado : function (req,res){
        return res.render ('headerLogueado')
    },
};

module.exports = loginController