const express = require('express');
const estoque = require('./estoque/estoque');
const app = express();

app.get('/', (req, res) => {
    res.send('API Estoque');
});

app.get('/api/add/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;

    let p = estoque.createProduct(id, nome, qtd);
    estoque.putProduct(p);

    res.json(p);
});

app.get('/api/edit/:id/:newQtd', (req, res) => {
    const { id, newQtd } = req.params;
    let p = estoque.editProduct(id, newQtd);
    res.json(p);
});

app.get('/api/remove/:id', (req, res) => {
    const { id } = req.params;
    estoque.removeProduct(id);
    res.json({ message: 'Product removed successfully' });
});


app.get('/api/list', (req, res) => {
    res.json(estoque.listProducts());
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('listening on port' + PORT);
});

