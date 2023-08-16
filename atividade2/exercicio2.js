function printMatrix(matrix) {
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = new Array(cols).fill(null).map(() => new Array(rows));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    
    return transposed;
}

function main() {
    // Defining a sample matrix
    const A = [
        [1, 2],
        [4, 5],
        [7, 8]
    ];
    
    console.log("Matrix A:");
    printMatrix(A);
    
    console.log("\nTransposed Matrix:");
    const transposedA = transposeMatrix(A);
    printMatrix(transposedA);
}

main();
