const express = require("express");
const bodyParser = require("body-parser")

// Rotas
const CategoriesRoutes = require("./modules/categories/CategoriesRoutes");

const port = process.env.PORT || 3000;
const domain = 'localhost'
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('json spaces', 4)

app.use(CategoriesRoutes);

app.use('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.listen(port, domain, () => {
  console.log(`Server online em http://${domain}:${port}`);
});
