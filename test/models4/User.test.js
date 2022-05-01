const User = require('./../../app/models4/User')
    //Requerimiento 4
    test('Create an User object', () => {

    //codigo que se usa en la app
    const user = new User(1, "carlogilmar", "Carlo", "Bio")

    //validacion
    expect(user.id).toBe(1)
    expect(user.username).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()  //verifica que el valor no sea undefine
    expect(user.lastUpdated).not.toBeUndefined()  
    });

    //Requerimiento 4 USO DE SETTERS
    test('Add setters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        user.setUsername = "Gilmar"
        expect(user.username).toBe("Gilmar")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New bio")
    })
    

