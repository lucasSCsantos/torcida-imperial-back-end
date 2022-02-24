const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ 
   path: path.resolve(__dirname, '../../.env') 
});

console.log({
	user: 'admin',
	password: process.env.PASSWORD,
	host: process.env.HOST,
	database: 'bd_told',
	port: '3306'
})

const connection = mysql.createPool({
	user: 'admin',
	password: process.env.PASSWORD,
	host: process.env.HOST,
	database: 'bd_told',
	port: '3306'
});

module.exports = connection;