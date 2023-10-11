const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar o Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar a pasta 'views' para usar EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Rota para processar o formulário
app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.render('dados', { nome, endereco, telefone, data });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
