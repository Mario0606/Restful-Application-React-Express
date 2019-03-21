const express = require("express");
// Rotas
const CategoriesRoutes = require("./routes/CategoriesRoutes");

const port = process.env.port || 3000;
const app = express();

app.use(CategoriesRoutes);

app.listen(port, "localhost", () => {
  console.log(`Server online na porta ${port}`);
});
