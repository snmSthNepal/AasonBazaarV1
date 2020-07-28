module.exports = function (app, db) {
    app.post("/note", function (req, res) {
        res.send("Generate message for the post request")
    })
}
   