const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:'1195',  
    database: 'dbfonda365',
    allowExitOnIdle: true

})



mudule.exports = {}