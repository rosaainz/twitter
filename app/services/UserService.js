const User = require('./../../app/models/User') //usaremos la clase User de la carpeta models

class UserService{

    //metodo estatico 
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){   //recibe objeto de User.js
        return    //regresa una lista de los atributos del objeto
    }

module.exports = UserService