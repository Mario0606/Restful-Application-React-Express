const routes = require("express").Router();
const ProductsController = require("./ProductsController");

routes.get("/product", ProductsController.getProducts);
routes.get("/product/:id", ProductsController.getProductById);
routes.put("/product/:id", ProductsController.updateProduct);
routes.get("/removeProduct/:id", ProductsController.removeProductById);
routes.post("/product", ProductsController.insertProduct);

module.exports = routes;
