function multiplyMatrices(A, B) {
    const numRowsA = A.length;
    const numColsA = A[0].length;
    const numRowsB = B.length;
    const numColsB = B[0].length;
  
    if (numColsA !== numRowsB) {
      return "Não é possível calcular";
    }
  
    const result = new Array(numRowsA);
  
    for (let i = 0; i < numRowsA; i++) {
      result[i] = new Array(numColsB);
      for (let j = 0; j < numColsB; j++) {
        let sum = 0;
        for (let k = 0; k < numColsA; k++) {
          sum += A[i][k] * B[k][j];
        }
        result[i][j] = sum;
      }
    }
  
    return result;
  }
  
  // Exemplo de matrizes A e B
  const matrixA = [
    [2, 3],
    [4, 5],
  ];
  
  const matrixB = [
    [6, 7],
    [8, 9],
  ];
  
  const resultMatrix = multiplyMatrices(matrixA, matrixB);
  console.log(resultMatrix);
  