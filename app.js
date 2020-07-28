const express = require("express")
const app = express()
const port = 8080
var courses = [
    { id: 1, name: "Nepali" },
    { id: 2, name: "Social" },
    { id: 3, name: "EPH" }
]
console.log(courses[2].id)

var name = process.argv.slice(2)
require("./routes")(app, {})

if (name[0] !== "sanam") {
    console.log("You are not authorized to start the server")
    process.exit()
}
else {
    app.listen(port, function () {
        console.log("Server Starting at port: " + port)
    })




}

//taking a parameter to find in the db
