const pool = require("../../database");

class CategoriesController {
  getCategories(req, res) {
    pool
      .query("SELECT * FROM categories ORDER BY id ASC")
      .then(result => res.status(200).json(result.rows))
      .catch(error => console.log(error.stack));
  }

  getCategorieById(req, res) {
    const id = parseInt(req.params.id);
    pool
      .query("SELECT * FROM categories WHERE id = $1", [id])
      .then(result => res.status(200).json(result.rows))
      .catch(error => {
        throw error;
      });
  }

  insertCategorie(req, res) {
    const { name } = req.body;
    pool
      .query("INSERT INTO categories (name) VALUES ($1)", [name])
      .then(result => res.status(201).send("Categorie added with success!"))
      .catch(error => {
        throw error;
      });
  }

  removeCategorieById(req, res) {
    const id = parseInt(req.params.id);
    pool
      .query("DELETE FROM categories WHERE id = ($1)", [id])
      .then(result =>
        res
          .status(200)
          .send(`Categorie with id = ${id} was removed with success!`)
      )
      .catch(error => {
        throw error;
      });
  }

  updateCategorie(req, res) {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool
      .query("UPDATE categories SET name = $1 WHERE id = $2", [name, id])
      .then(response =>
        res.status(200).send(`Categorie with id = ${id} updated successfully!`)
      )
      .catch(error => {
        throw error;
      });
  }
}

module.exports = new CategoriesController();
