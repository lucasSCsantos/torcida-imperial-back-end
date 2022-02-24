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

const connection = mysql.createPool({
	host: process.env.HOST,
	user: 'admin',
	password: process.env.PASSWORD,
	database: 'bd_told',
});

module.exports = connection;