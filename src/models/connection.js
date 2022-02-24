const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ 
   path: path.resolve(__dirname, '../../.env') 
});

const host = process.env.HOST;
const password = process.env.PASSWORD;

const connection = mysql.createPool({
	host: host,
	user: 'admin',
	password: password,
	database: 'bd_told',
});

module.exports = connection;