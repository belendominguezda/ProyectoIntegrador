let productsController = {
    index: function (req,res){
        return res.render ('products')
    },
    add : function(req,res){
        return res.render ('product-add')
    },
};

module.exports = productsController;