const config = require("../config/config")

module.exports = function(sequelize,DataTypes){ //funcion (con dos parametros; sequelize y dataTypes) que representa al modelo
    let alias = "Comentario"; //es el nombre del modelo en el controlador
    
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
        tableName: "tablaComentarios",
    }

    let Comentario = sequelize.define(alias,cols,config); //guardamos en una variable la ejecucion del metodo define (que obtenemos del parametro sequelize)
    
    //Asociacion con la tabla de usuario
    Comentario.associate = function(models){ //models como parametro que representa a todos los modelos
        Comentario.belongsTo(models.Usuario,{
           //caracteristicas de la relacion
            as: "usuario",
            foreignKey : "usuario_id"
        });
        Comentario.belongsTo(models.Producto,{
            as: "producto",
            foreignKey : "productos_id"
        })
    }


    return Comentario
}