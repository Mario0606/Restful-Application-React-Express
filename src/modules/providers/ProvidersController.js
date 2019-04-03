const pool = require("../../database");

class ProvidersController {
  getProviders(req, res) {
    pool
      .query("SELECT * FROM providers ORDER BY id ASC")
      .then(result => res.status(200).json(result.rows))
      .catch(error => console.log(error.stack));
  }

  getProviderById(req, res) {
    const id = parseInt(req.params.id);
    pool
      .query("SELECT * FROM providers WHERE id = $1", [id])
      .then(result => res.status(200).json(result.rows))
      .catch(error => {
        throw error;
      });
  }

  insertProvider(req, res) {
    const { name, street, city, state } = req.body;
    pool
      .query("INSERT INTO providers (name, street, city, state) VALUES ($1, $2, $3, $4)", [name, street, city, state])
      .then(result => res.status(201).send("Provider added with success!"))
      .catch(error => {
        throw error;
      });
  }

  removeProviderById(req, res) {
    const id = parseInt(req.params.id);
    pool
      .query("DELETE FROM providers WHERE id = ($1)", [id])
      .then(result =>
        res
          .status(200)
          .send(`Provider with id = ${id} was removed with success!`)
      )
      .catch(error => {
        throw error;
      });
  }

  updateProvider(req, res) {
    const id = parseInt(req.params.id);
    const { name, street, city, state } = req.body;
    pool
      .query("UPDATE providers SET name = $1, street = $2, city = $3, state = $4 WHERE id = $5", [name, street, city, state, id])
      .then(response =>
        res.status(200).send(`Provider with id = ${id} updated successfully!`)
      )
      .catch(error => {
        throw error;
      });
  }
}

module.exports = new ProvidersController();
