//let app = require("./../app.js")

//console.log(app.courses)

module.exports = function (app, db) {
    app.post("/note", function (req, res) {
        res.send("Generated message for the post request")
    })

    app.post("/addCourses", function (req, res) {
        let app = require("./../app.js")
        //console.log(app.courses)
        console.log("Adding Course: " + req.body.name)
        const newCourse = {
            id: app.courses.length + 1,
            name: req.body.name
        }
        app.courses.push(newCourse)
        //console.log("Final List of courses now: ", app.courses)
        res.send(app.courses)
    })
}
   