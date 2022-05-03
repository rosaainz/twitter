const User = require('./../../app/models/User') //usaremos la clase User de la carpeta models

class UserService{

    //metodo estatico 
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){   //recibe objeto de User.js
        return Object.values(user)   //regresa una lista de los atributos del objeto
    }

    static updateUsername (objectUser, newUsername) { //recibe objeto de la clase User.js y un string
        this.username = newUsername   //el string actualiza el valor de username
      }

      static getAllUsernames(users){  //recibe lista de objetos de la clase User
        const newListUsernames = users.map(user => user.username) //regresa una lista de los usernames de los objetos
        return newListUsernames        
    }
    
}

module.exports = UserService