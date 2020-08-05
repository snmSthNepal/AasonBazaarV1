module.exports = function (app, db) {
    app.get("/", function (req, res) {/*
        app.engine('html', require('ejs').renderFile)
        app.set('view engine', 'html');*/
        res.send("This will be your homepage")
    })
    app.get("/login", function (req, res) {
        res.sendFile("login.html", {root: (__dirname, "./View/")})
    })

    app.get("/courses/:id", function (req, res) {
        res.send(req.params.id);
    })

}