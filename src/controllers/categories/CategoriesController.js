const pool = require("../../database");

class CategoriesController {
  getCategories(req, res) {
    pool.query("SELECT * FROM categories ORDER BY id ASC", (err, results) => {
      if (err) throw err;

      res.status(200).json(results.rows);
    });
  }
}

module.exports = new CategoriesController();
