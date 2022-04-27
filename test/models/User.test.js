const User = require('./../../app/models/User')

    describe("Prueba de Jest", () => {
        test('Prueba 1', () => {

            const user = new User(1, "carlogilmar")
            expect(user.id).toBe(1)
        });
    })