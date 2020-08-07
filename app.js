const express = require("express")

//express app
const app = express()

//register view engine
app.set('view engine', 'ejs')
//app.set('views', 'View')

const http = require("http")
const fs = require("fs")
const port = 8080
require("./controllers")(app, {})
app.use(express.json())

//Creating an array to test the routes
var courses = [
    { id: 1, name: "Nepali" },
    { id: 2, name: "Social" },
    { id: 3, name: "EPH" }
]

function getCourses() {
    return courses
}

//exporting courses as an array
module.exports.courses = courses

//exporting courses as a return function
module.exports.getCourses = getCourses

var name = process.argv.slice(2)


//Checking the authenticity of the user trying to access the server
if (name[0] !== "sanam") {
    console.log("You are not authorized to start the server")
    process.exit()
}
else {
    app.listen(port, function () {
        console.log("Server Starting at port: " + port)
    })
}

