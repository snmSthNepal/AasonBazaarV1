module.exports = function (app, db) {

    let fileApp = require("./../app.js")


    app.delete("/courses/:id", function (req, res) {

        console.log("Available courses before deleting: ")
        console.log(fileApp.courses)

        const course = fileApp.courses.find(c => c.id === parseInt(req.params.id))

        //check if the id is available
        if (!course) res.status(404).send("The ID that you provided is not available")

        //delete the id if available
    const index = fileApp.courses.indexOf(course)
    fileApp.courses.splice(index, 1)

    console.log("The courses after deleting the one that you requested are: ")
    console.log(fileApp.courses)
    res.send(course)
        
    })
}