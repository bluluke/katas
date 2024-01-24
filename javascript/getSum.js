const getSum = (int1, int2) => {
    if(int1 === int2) {
        return int1;
    }
    let sum = 0;

    if(Math.abs(int1 - int2) === 1) {
    sum = int1 + int2;
    return sum;
    }
    const sortedInputArray = [int1, int2].sort(function(a, b) {
        return a - b;
    });

    for(let i = sortedInputArray[0]; i <= sortedInputArray[1]; i++) {
        sum += i;
    }
    return sum;
}



module.exports = { getSum };

