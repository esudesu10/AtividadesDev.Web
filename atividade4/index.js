const calc = require('./util/calculadora');
const express = require('express');

const app = express();

// Create a route to calculate the sum
app.get('/soma/:a/:b', function(req, res){
    const { a, b } = req.params;
    const result = calc.somar(parseInt(a), parseInt(b));
    res.send(`The sum of ${a} and ${b} is ${result}`);
});

app.get('/subtrair/:a/:b', function(req, res){
    const { a, b } = req.params;
    const result = calc.subtrair(parseInt(a), parseInt(b));
    res.send(`The sub of ${a} and ${b} is ${result}`);
});

app.get('/multiplicar/:a/:b', function(req, res){
    const { a, b } = req.params;
    const result = calc.multiplicar(parseInt(a), parseInt(b));
    res.send(`The mult of ${a} and ${b} is ${result}`);
});

app.get('/dividir/:a/:b', function(req, res){
    const { a, b } = req.params;
    const result = calc.dividir(parseInt(a), parseInt(b));
    res.send(`The div of ${a} and ${b} is ${result}`);
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log('listening on', PORT);
});