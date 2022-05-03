const User = require('./../../app/models/User') //usaremos la clase User de la carpeta models

class UserService{

    //metodo estatico 
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }




module.exports = UserService