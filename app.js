const http = require("http")
const fs = require("fs")
const express = require("express")
const app = express()
const port = 8080
require("./Controller")(app, {})
app.use(express.json())

var courses = [
    { id: 1, name: "Nepali" },
    { id: 2, name: "Social" },
    { id: 3, name: "EPH" }
]

//console.log("Length of the array courses is: " + courses.length)

//console.log("For testing: "+courses[2].id)

function getCourses() {
    return courses
}
module.exports.courses = courses
module.exports.getCourses = getCourses

var name = process.argv.slice(2)

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
