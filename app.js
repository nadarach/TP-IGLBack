const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
//const Sequelize = require('sequelize')
const PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

/*const sequelize = new Sequelize({
    host: 'remotemysql.com',
    database: 'nxv9tGXW5W',
    username: 'nxv9tGXW5W',
    password: 'LqadDAMfQL',
    dialect: 'mysql'
  });
  // check the databse connection
  sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database: ' + err));
*/
/*const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'nxv9tGXW5W',
    password: 'LqadDAMfQL',
    database: 'nxv9tGXW5W'
})

connection.connect()*/

// create user model
/*const User = sequelize.define('admin', {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  // create table with user model
  User.sync()
    .then(() => console.log('Oh yeah! User table created successfully'))
    .catch(err => console.log('BTW, did you enter wrong database credentials?'))*/

var routes = require('./app/Routes/routes.js'); //importing route
routes(app); //register the route

app.listen(PORT, () => {
    console.log('APP running on port : ' + PORT)
})