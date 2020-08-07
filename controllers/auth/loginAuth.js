const loginModel = require('./../../models/loginModel')
var name = "sanam"
var password = "a"

function authUser() {
    let status = loginModel.getUser(name, password)
    if (status) {
        console.log("ALL OK!!")
        // Will have to render to an appropriate page
    }
}