const Torcedores = require('../models/Torcedores');

const getAll = async () => {
	const torcedores = await Torcedores.getAll();
	return torcedores;
}

const getByEmail = async (email) => {
	const torcedor = await Torcedores.getByEmail(email);
	return torcedor;
}

const updateRole = async (email, cargo) => {
	const updated = await Torcedores.updateRole(email, cargo);
	const torcedor = await Torcedores.getByEmail(email);
	if (updated) return { torcedor };
	return { message: 'Email ou cargo inválido' };
}

module.exports = {
	getAll,
	getByEmail,
	updateRole
}
