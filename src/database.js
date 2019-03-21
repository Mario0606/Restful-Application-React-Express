const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Produtos",
  password: "secret",
  port: 5432
});

module.exports = pool