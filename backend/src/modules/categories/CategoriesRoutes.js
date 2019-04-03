const routes = require("express").Router();
const CategoriesController = require("./CategoriesController");

routes.get("/getCategories", CategoriesController.getCategories);
routes.get("/getCategorie/:id", CategoriesController.getCategorieById);
routes.put("/getCategorie/:id", CategoriesController.updateCategorie);
routes.get("/removeCategorie/:id", CategoriesController.removeCategorieById);
routes.post("/addCategorie", CategoriesController.insertCategorie);

module.exports = routes;
