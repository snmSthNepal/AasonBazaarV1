const getRoutes = require("./getRoutes")
const postRoutes = require("./postRoutes")

module.exports = function (app, db) {
    getRoutes(app, db)
    postRoutes(app, db)
}