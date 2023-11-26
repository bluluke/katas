function listSquared(m, n) {
    let result = [];

    for (let i = m; i <= n; i++) {
        const divisors = findDivisors(i);
        const sumOfSquares = divisors.reduce((acc, val) => acc + val * val, 0);

        if (Number.isInteger(Math.sqrt(sumOfSquares))) {
            result.push([i, sumOfSquares]);
        }
    }

    return result;
}

function findDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== num / i) {
                divisors.push(num / i);
            }
        }
    }
    return divisors;
}
