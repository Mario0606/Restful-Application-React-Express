const routes = require("express").Router();
const ProvidersController = require("./ProvidersController");

routes.get("/provider", ProvidersController.getProviders);
routes.get("/provider/:id", ProvidersController.getProviderById);
routes.put("/provider/:id", ProvidersController.updateProvider);
routes.get("/removeProvider/:id", ProvidersController.removeProviderById);
routes.post("/provider", ProvidersController.insertProvider);

module.exports = routes;
