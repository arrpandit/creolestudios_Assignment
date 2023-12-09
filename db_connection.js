const mysql = require('mysql2/promise')
require('dotenv').config()
const mysqlPool = mysql.createPool({
    host:'localhost',
    user:process.env.DB_USER_NAME,
    password:process.env.DB_PASSWORD,
    database:'assessment_db'
})


module.exports = mysqlPool;

