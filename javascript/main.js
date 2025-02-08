const fs = require('fs');

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

    let elapsedMs = (end - start).toFixed(3);
    let output = `JavaScript: ${elapsedMs} ms\n`;

    fs.writeFileSync('/outputs/javascript_output.txt', output);

    console.log(output);
}

const n = process.argv[2] ? parseInt(process.argv[2], 10) : 300;
benchmark(n);
