require('dotenv').config();
const mysql = require('mysql2');

const database_connection = mysql.createPool( 
    {
        host: `${process.env.HOST}`,
        user: `${process.env.USER}`,
        password: `${process.env.PASSWORD}`,
        database: `${process.env.DATABASE}`,
        multipleStatements: true,
        waitForConnections: true,
        connectionLimit: 100,
        queueLimit: 0,
    }
);

module.exports = database_connection;