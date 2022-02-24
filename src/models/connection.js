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
})

const connection = mysql.createPool({
	user: 'admin',
	password: process.env.PASSWORD,
	host: process.env.HOST,
	database: 'bd_told',
});

module.exports = connection;