module.exports = function (app, db) {

    app.get("/", function (req, res) {
        res.send("This will be your homepage")
    })
    app.get("/login", function (req, res) {
        res.send("This is login Page")
    })

    app.get("/courses/:id", function (req, res) {
        res.send(req.params.id);
    })
}