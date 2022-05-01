const User = require('./../../app/models/User')

    describe("Unit Test for User class", () => {
        test('Create an User object', () => {

            //codigo que se usa en la app
            const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")

            //validacion
            expect(user.id).toBe(1)
            expect(user.username).toBe("carlogilmar")
            expect(user.name).toBe("Carlo")
            expect(user.bio).toBe("Bio")
            expect(user.dateCreated).toBe("dateCreated")
            expect(user.lastUpdated).toBe("lastUpdated")
        });
    })