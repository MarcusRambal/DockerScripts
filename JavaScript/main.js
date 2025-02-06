const fs = require('fs');
const { performance } = require('perf_hooks');

function esPrimo(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function sumaPrimos(limite) {
    let suma = 0;
    let count = 0;
    let num = 2;

    while (count < limite) {
        if (esPrimo(num)) {
            suma += num;
            count++;
        }
        num++;
    }

    return suma;
}

const inicio = performance.now();
const suma = sumaPrimos(10000);
const fin = performance.now();

fs.writeFileSync('suma_primos.txt', suma.toString());
console.log(`${(fin - inicio).toFixed(2)} ms`);
