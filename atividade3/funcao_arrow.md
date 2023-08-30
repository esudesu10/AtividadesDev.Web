**Função Arrow (Arrow Function)**

Arquivo: `funcao_arrow.md`

## Função Arrow

As Arrow Functions (ou funções de seta) são uma sintaxe alternativa e concisa para criar funções em JavaScript. Elas são especialmente úteis para escrever funções simples e de uma única expressão de forma mais sucinta.

### Descrição

Uma função arrow é definida usando a sintaxe `() => {}`. Ela é geralmente mais concisa do que a sintaxe tradicional de função e, além disso, ela herda automaticamente o valor `this` do contexto ao qual pertence.

### Exemplo de Uso

```javascript
// Sintaxe tradicional de função
function soma(a, b) {
  return a + b;
}

// Função arrow equivalente
const somaArrow = (a, b) => a + b;

console.log(soma(2, 3));       // Saída: 5
console.log(somaArrow(2, 3));  // Saída: 5
```

**Promise**

Arquivo: `promise.md`
