const mysql = require("mysql2");
const util = require("util");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);

module.exports = pool;