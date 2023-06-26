const config = require("../config/config")

module.exports = function(sequelize,DataTypes){ //funcion (con dos parametros; sequelize y dataTypes) que representa al modelo
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
        imagenPerfil : {
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
        tableName: "tablaUsuarios",
    }

    let Usuario = sequelize.define(alias,cols,config); //guardamos en una variable la ejecucion del metodo define (que obtenemos del parametro sequelize)
   
   //Asociacion con la tabla de productos
    Usuario.associate = function(models){ //models como parametro que representa a todos los modelos
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuario_id"
        });
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id"
        })
    }

    return Usuario
}