const routes = require("express").Router();
const CategoriesController = require("../controllers/categories/CategoriesController");

routes.get("/getCategories", CategoriesController.getCategories);

module.exports = routes;
