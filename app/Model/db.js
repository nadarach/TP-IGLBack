const mysql = require('mysql')

var pool  = mysql.createPool({
    host: 'remotemysql.com',
    user: 'nxv9tGXW5W',
    password: 'LqadDAMfQL',
    database: 'nxv9tGXW5W'
})
 
/*pool.getConnection(function(err, connection) {
  if (err) throw err; // not connected!
});*/

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})
module.exports = pool

/*var connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'nxv9tGXW5W',
    password: 'LqadDAMfQL',
    database: 'nxv9tGXW5W'
})

connection.connect(function(err) {
    if (err) throw err
})*/

//module.exports = connection