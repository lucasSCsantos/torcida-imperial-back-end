const connection = require("./connection");

const getAll = async () => {
	const [torcedores] = await connection.execute('SELECT * FROM torcedores');
	return torcedores;
}

const getByEmail = async (email) => {
	const [torcedor] = await connection.execute('SELECT * FROM torcedores WHERE email=?', [email]);

	if (torcedor.length === 0) return null;

	return torcedor[0];
}

const updateRole = async (email, cargo) => {
	const [torcedor] = await connection.execute('UPDATE torcedores SET cargo=? WHERE email=?', [cargo, email]);
	return torcedor;
}

module.exports = {
	getAll,
	getByEmail,
	updateRole
}
