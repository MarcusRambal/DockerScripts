import { performance } from "perf_hooks";
import * as fs from "fs";

function generateMatrix(n: number): number[][] {
    return Array.from({ length: n }, () =>
        Array.from({ length: n }, () => Math.floor(Math.random() * 10))
    );
}

function multiplyMatrices(A: number[][], B: number[][]): number[][] {
    let n = A.length;
    let C: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}

function benchmark(n: number = 300): void {
    let A = generateMatrix(n);
    let B = generateMatrix(n);

    let start = performance.now();
    let C = multiplyMatrices(A, B);
    let end = performance.now();

    let time = (end - start).toFixed(3);
    console.log(`TypeScript: ${time} ms`);

    fs.appendFileSync("/app/results.txt", `TypeScript: ${time} ms\n`);
}

benchmark();

