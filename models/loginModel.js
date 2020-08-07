const users = [
    { name: "sanam", password: "a" }
    {name: "test", password: "test"}
]

//return all the users in the db
module.exports = function getUser(name, password) {
    user = users.find(u => u.name == name && u.password == password)
    if (!user) res.status(404).send("USER NOT FOUND")
    console.log("VALID USER")
    return true
}   

//valid a user account
function authUser(name, password) {
    let validity = getUser(name, password)
    if (!validity) console.log("UNAUTHORIZED ACCESS!!")
    console.log("SUCCESS!!")
}
