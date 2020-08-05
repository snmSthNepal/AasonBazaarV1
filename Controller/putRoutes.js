module.exports = function (app, db) {
    var test = 0
    let fileApp = require("./../app.js")
    //console.log(fileApp.courses)

    app.put("/putCourse/:id/:name", function (req, res) {
        res.send("The Id that you sent is: " + req.params.id + " and the name sent is: " + req.params.name)
        console.log("The Id that you sent is: " + req.params.id)//fileApp.courses[0].id)
        console.log("The Name that you sent is: " + req.params.name)//fileApp.courses[0].id)
        console.log("Old list of Subjects")
        console.log(fileApp.courses)
        const course = fileApp.courses.find(c => c.id === parseInt(req.params.id))
        if (!course) res.status(404).send("The course id is not available in the database")

        //Validate (!Done)

        course.name = req.params.name

/*        fileApp.courses.forEach(element => {
            console.log("Now the next element id is: " + element.id);
            let test = element.id;
            console.log("test value: " + test)

            if (req.params.id == test) {
                console.log("ID valid")
                fileApp.courses[req.params.id].name = req.params.name
            }
            else {
                console.log("Invalid ID")
            }
        })*/
        console.log("New update course: ")
        console.log(fileApp.courses)
    })
}