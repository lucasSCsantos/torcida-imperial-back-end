const express = require('express');
const cors = require('cors');
const Torcedores = require('./controllers/Torcedores');
const bodyParser = require('body-parser');
const app = express()

const port = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json())

app.get('/torcedores', Torcedores.getAll);
app.get('/torcedores/buscar', Torcedores.getByEmail);
app.put('/torcedores', Torcedores.updateRole)

app.listen(port, () => console.log(`Server started in ${port}!`))