const routes = require("express").Router();
const CategoriesController = require("./CategoriesController");

routes.get("/getCategories", CategoriesController.getCategories);

module.exports = routes;
