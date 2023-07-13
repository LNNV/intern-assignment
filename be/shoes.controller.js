const pool = require('./database')

exports.getAllShoes = (request, response) => {
    pool.query('select * from shoes order by shoes_id asc', (error, results) => {
        if (error) {
            response.status(500).json({error: error.message});
        } else {
            response.status(200).json(results.rows);
        }
    })
}