const express = require("express");

// Rotas
const CategoriesRoutes = require("./modules/categories/CategoriesRoutes");

const port = process.env.port || 3000;
const domain = 'localhost'
const app = express();

app.use(CategoriesRoutes);

app.listen(port, domain, () => {
  console.log(`Server online em http://${domain}:${port}`);
});
