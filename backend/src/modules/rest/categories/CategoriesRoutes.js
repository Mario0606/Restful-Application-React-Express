const routes = require("express").Router();
const CategoriesController = require("./CategoriesController");

routes.get("/categorie", CategoriesController.getCategories);
routes.get("/categorie/:id", CategoriesController.getCategorieById);
routes.put("/categorie/:id", CategoriesController.updateCategorie);
routes.get("/removeCategorie/:id", CategoriesController.removeCategorieById);
routes.post("/categorie", CategoriesController.insertCategorie);

module.exports = routes;
