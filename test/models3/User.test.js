const User = require('./../../app/models3/User')
    //Requerimiento 3
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

    test('Add getters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });