const routes = require("express").Router();
const ProductsController = require("./ProductsController");

routes.get("/getProducts", ProductsController.getProducts);
routes.get("/getProduct/:id", ProductsController.getProductById);
routes.put("/getProduct/:id", ProductsController.updateProduct);
routes.get("/removeProduct/:id", ProductsController.removeProductById);
routes.post("/addProduct", ProductsController.insertProduct);

module.exports = routes;
