function generateMatrix(n) {
    return Array.from({ length: n }, () =>
        Array.from({ length: n }, () => Math.floor(Math.random() * 10))
    );
}

function multiplyMatrices(A, B) {
    let n = A.length;
    let C = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}

function benchmark(n = 300) {
    let A = generateMatrix(n);
    let B = generateMatrix(n);

    let start = performance.now();
    let C = multiplyMatrices(A, B);
    let end = performance.now();

    console.log(`JavaScript: ${(end - start).toFixed(3)} ms`);
}

benchmark();
