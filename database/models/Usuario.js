const config = require("../config/config")

module.exports = function(sequelize,DataTypes){
    let alias = "Usuario"; //es el nombre del modelo en el controlador
    
    let cols = {
        id: {
            primaryKey: true, 
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        }, 
        usuario: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        },
        fechaNacimiento: {
            type: DataTypes.DATE
        },
        dni: {
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
        tableName: "usuarios",
    }

    let Usuario = sequelize.define(alias,cols,config);

    //Asociacion con la tabla de productos
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuario_id"
        })
    }

    //Asociacion con la tabla de comentarios
    Usuario.associate = function(models){
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id"
        })
    }
    return Usuario
}