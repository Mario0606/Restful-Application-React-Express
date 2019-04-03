const routes = require("express").Router();
const ProvidersController = require("./ProvidersController");

routes.get("/getProviders", ProvidersController.getProviders);
routes.get("/getProvider/:id", ProvidersController.getProviderById);
routes.put("/getProvider/:id", ProvidersController.updateProvider);
routes.get("/removeProvider/:id", ProvidersController.removeProviderById);
routes.post("/addProvider", ProvidersController.insertProvider);

module.exports = routes;
