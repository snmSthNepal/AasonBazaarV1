const express = require("express")
const app = express()
const port = 8080

var name = process.argv.slice(2)

if (name[0] !== "sanam") {
    console.log("You are not authorized to start the server")
    process.exit()
}
else {
    app.get("/", (req, res) => {
        res.send("Hello World!! This is your homepage")
    })

    app.listen(port, function () {
        console.log("Server Starting at port: " + port)
    })
}