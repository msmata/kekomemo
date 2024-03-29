const mysql = require('mysql');
require('dotenv').config()

let connection;

if (process.env.JAWSDB_URL) {
  console.log('yes using JAWSDB_URL')
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  console.log('not using JAWSDB_URL')
    connection = mysql.createConnection({
        host: (process.env.JAWSDB_HOST_4 || 'localhost'),
        user: (process.env.JAWSDB_USER_4 || 'kekomemo'),
        password: (process.env.JAWSDB_PASSWORD_4 || 'keko2020'),
        database: (process.env.JAWSDB_DATABASE_4 || 'comidas'),
        port: (process.env.JAWSDB_PORT_4 || 3306)
    });
};

module.exports = connection;