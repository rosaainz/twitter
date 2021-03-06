class User{
   constructor (id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    //Getters 
    get getUsername(){
        return this.username
    }

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }

     //Requerimiento 4: setters
     set setUsername(newUsername){
        this.username = newUsername
    }

    set setBio(newBio){
        this.bio = newBio
    }

}
const user = new User(1, "carlogilmar", "Carlo")
module.exports = User
