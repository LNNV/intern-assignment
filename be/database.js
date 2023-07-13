const Pool = require('pg').Pool

const pool = new Pool({
  user: 'lnnv',
  host: 'postgresql-lnnv.alwaysdata.net',
  database: 'lnnv_db',
  password: 'alt.b4-1oahacml@yopmail.com',
  port: 5432,
})

module.exports = pool