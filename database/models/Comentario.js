const config = require("../config/config")

module.exports = function(sequelize,DataTypes){
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
        productos_id: {
            type: DataTypes.INTEGER
        },
        comentario: {
            type: DataTypes.INTEGER
        },
        created_At:{
            type: DataTypes.DATE
        },
        updated_At:{
            type: DataTypes.DATE
        },
        deleted_At: {
            type: DataTypes.DATE
        }
    }

    let config = {
        tableName: "comentarios",
    }

    let Comentario = sequelize.define(alias,cols,config);
    //Asociacion con la tabla de usuario

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario,{
            as: "usuario",
            foreignKey : "usuario_id"
        })
    }

    //Asociacion con la tabla de productos
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Producto,{
            as: "producto",
            foreignKey : "productos_id"
        })
    }
    return Comentario
}