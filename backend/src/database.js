const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "store_test",
  password: "samsung",
  port: 5432
});

module.exports = pool