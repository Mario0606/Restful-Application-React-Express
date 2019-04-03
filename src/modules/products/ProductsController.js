const pool = require("../../database");

class ProductsController {
  getProducts(req, res) {
    pool
      .query("SELECT * FROM products ORDER BY id ASC")
      .then(result => res.status(200).json(result.rows))
      .catch(error => console.log(error.stack));
  }

  getProductById(req, res) {
    const id = parseInt(req.params.id);
    pool
      .query("SELECT * FROM products WHERE id = $1", [id])
      .then(result => res.status(200).json(result.rows))
      .catch(error => {
        throw error;
      });
  }

  insertProduct(req, res) {
    const { name, amount, price, id_providers, id_categories } = req.body;
    pool
      .query("INSERT INTO products (name, amount, price, id_providers, id_categories) VALUES ($1, $2, $3, $4, $5)", [name, amount, price, id_providers, id_categories])
      .then(result => res.status(201).send("Product added with success!"))
      .catch(error => {
        throw error;
      });
  }

  removeProductById(req, res) {
    const id = parseInt(req.params.id);
    pool
      .query("DELETE FROM products WHERE id = ($1)", [id])
      .then(result =>
        res
          .status(200)
          .send(`Product with id = ${id} was removed with success!`)
      )
      .catch(error => {
        throw error;
      });
  }

  updateProduct(req, res) {
    const id = parseInt(req.params.id);
    const { name, amount, price, id_providers, id_categories } = req.body;
    pool
      .query("UPDATE products SET name = $1, amount = $2, price = $3, id_providers = $4, id_categories = $5 WHERE id = $6", [name, amount, price, id_providers, id_categories, id])
      .then(response =>
        res.status(200).send(`Product with id = ${id} updated successfully!`)
      )
      .catch(error => {
        throw error;
      });
  }
}

module.exports = new ProductsController();
