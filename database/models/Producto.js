const config = require("../config/config")

module.exports = function(sequelize,DataTypes){ //funcion (con dos parametros: sequelize y DataTypes) que representa al modelo
    let alias = "Producto"; //es el nombre del modelo en el controlador
    
    let cols = {
        id: {
            primaryKey: true, 
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        usuario_id: {
            type: DataTypes.INTEGER
        }, 
        nombreProducto: {
            type: DataTypes.STRING
        },
        descripcionProducto: {
            type: DataTypes.STRING
        },
        fechaCarga: {
            type: DataTypes.INTEGER
        },
        comentarios: {
            type: DataTypes.INTEGER
        },
        imagenProducto: {
            type: DataTypes.STRING
        },
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }

    let config = {
        tableName: "tablaProductos",
        underscored: false
    }

    //guardamos en una variable la ejecucion del metodo define (que obtenemos del parametro sequelize)
    let Producto = sequelize.define(alias,cols,config); 
     
    //Asociacion tabla de productos con usuario (muchos productos tienen un usuario)
    Producto.associate = function(models){ //models como parametro que representa a todos los modelos
        Producto.belongsTo(models.Usuario,{
            as: "usuario",
            foreignKey : "usuario_id"
        });
        Producto.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "productos_id"
        })
    }

    return Producto
}