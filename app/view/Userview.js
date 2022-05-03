const UserService = require('./../services/UserService')  //interactua con la clase User a traves de la clase UserService


//metodo que sirve para crear un nuevo objeto a partir de payload
class Userview{
    static createUser(payload){
        if( payload == null){   //valida que al enviar null, obtenga:
        return {error: "payload no existe"} //un objeto con la llave error

        //Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id`
        // un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
        }else if(
             typeof payload.username == 'string' &&
             typeof payload.name == 'string' &&
             typeof payload.id =='number' ){
        return UserService.create(payload.User.id, payload.User.username, payload.User.name)  

        //Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
        }else{
            return{ error: "necesitan tener un valor válido"}
        }
    }
}

module.exports = Userview