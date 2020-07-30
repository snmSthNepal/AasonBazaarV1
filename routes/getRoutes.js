module.exports = function (app, db) {
    app.get("/", function (req, res) {
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        res.render("This will be your homepage")
    })
    app.get("/login", function (req, res) {
        res.send("This is login Page")
    })

    app.get("/courses/:id", function (req, res) {
        res.send(req.params.id);
    })



}