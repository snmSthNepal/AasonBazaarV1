const getRoutes = require("./getRoutes")
const postRoutes = require("./postRoutes")
const putRoutes = require("./putRoutes")
const deleteRoutes = require("./deleteRoutes")

module.exports = function (app, db) {
    getRoutes(app, db)
    postRoutes(app, db)
    putRoutes(app, db)
    deleteRoutes(app, db)
}