const Userview = require('./../../app/view/Userview')

describe("Test for UserView", () =>{

    TextDecoderStream("Return an error object when try to create a new user with an null payload", () =>{
        const payload = null
        const result = Userview.createUser(payload)

        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })

//Requerimiento 2
test ("Return an error object when try to create a new user with a payload with invalid properties", () => {
    const payload = {username: null, name: 12, id: "id"}
    const result = Userview.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
})

//Requerimiento 3
test ("Return an error object when try to create a new user with a payload with invalid properties", () => {
    const payload = {username: "Username"}
    const result = Userview.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
})

//Requerimiento 4
test ("Return an error object when try to create a new user with a payload with invalid properties", () => {
    const payload = {username: "username", id:1, name: "name"}
    const result = Userview.createUser(payload)
    expect(result.name).toBe("name")
    expect(result.username).toBe("username")
    expect(result.id).toBe(1)
})
})