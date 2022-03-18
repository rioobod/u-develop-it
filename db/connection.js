const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'election'
});

module.exports = db;