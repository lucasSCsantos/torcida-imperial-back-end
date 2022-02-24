const Torcedores = require('../services/Torcedores');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config({ 
   path: path.resolve(__dirname, '../../.env') 
});

const getAll =  async (req, res) => {
	try {
		const torcedores = await Torcedores.getAll();
		
		res.status(200).json(torcedores);
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message });
	}
}

const getByEmail = async (req, res) => {
	const { email } = req.query;
	const torcedor = await Torcedores.getByEmail(email);

	if (!torcedor) return res.status(404).json({ message: 'Not Found!'});

	res.status(200).json(torcedor);
}

const updateRole = async (req, res) => {
	const token = req.headers['authorization'];

	const data = jwt.verify(token, process.env.KEY);
	const user = await Torcedores.getByEmail(data.email);

	if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

	if (!user || user.cargo !== 'dev') {
    return res.status(401).json({ error: 'Token inválido' });
	}

	const { email, cargo } = req.body;
	const { torcedor, message } = await Torcedores.updateRole(email, cargo);


	if (message) res.status(400).json(message);

	res.status(201).json(torcedor);
}

module.exports = {
	getAll,
	getByEmail,
	updateRole,
}