const express = require("express");
const bodyParser = require("body-parser");
const expressGraphql = require("express-graphql");

// Rotas
const CategoriesRoutes = require("./modules/rest/categories/CategoriesRoutes");
const ProductsRoutes = require("./modules/rest/products/ProductsRoutes");
const ProvidersRoutes = require("./modules/rest/providers/ProvidersRoutes");

const CategoriesSchema = require("./modules/graphql/categories/schemas");

const port = process.env.PORT || 3000;
const domain = "localhost";
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// app.set("json spaces", 4);

app.use(CategoriesRoutes);
app.use(ProvidersRoutes);
app.use(ProductsRoutes);

app.use(
  "/graphql",
  expressGraphql({
    schema: CategoriesSchema,
    graphiql: true
  })
);

app.use("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(port, domain, () => {
  console.log(`Server online em http://${domain}:${port}`);
});
