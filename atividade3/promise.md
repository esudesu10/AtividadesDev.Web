## Promise

Promises são uma maneira de lidar com operações assíncronas em JavaScript de forma mais organizada e legível. Elas representam um valor que pode estar disponível agora, no futuro ou nunca.

### Descrição

Uma Promise tem três estados possíveis: pendente (pending), resolvida (fulfilled) ou rejeitada (rejected). Elas permitem que você trate operações assíncronas de maneira mais estruturada usando métodos como `.then()` para tratar o sucesso e `.catch()` para tratar erros.

### Exemplo de Uso

```javascript
// Exemplo de uma função que retorna uma Promise
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (b !== 0) {
      resolve(a / b);
    } else {
      reject("Divisão por zero não é permitida!");
    }
  });
}

dividir(10, 2)
  .then(resultado => {
    console.log("Resultado:", resultado); // Saída: Resultado: 5
  })
  .catch(erro => {
    console.error("Erro:", erro);
  });
```