const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ 
   path: path.resolve(__dirname, '../../.env') 
});

console.log({
	host: process.env.HOST,
	user: 'admin',
	password: process.env.PASSWORD,
	database: 'bd_told',
})

const host = process.env.HOST;
const password = process.env.PASSWORD;

const connection = mysql.createPool({
	host: host,
	user: 'admin',
	password: password,
	database: 'bd_told',
});

module.exports = connection;