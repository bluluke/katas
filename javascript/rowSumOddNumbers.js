const rowSumOddNumbers = (n) => {
    const firstOddNumber = (n * (n - 1)) + 1;
    let total = 0;

    for (let i = 0; i < n; i++) {
        total += firstOddNumber + (2 * i);
    }

    return total;
}
module.exports = { rowSumOddNumbers };