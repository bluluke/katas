const getSum = (int1, int2) => {
    let sum = 0;
    
    const sortedInputArray = [int1, int2].sort(function(a, b) {
        return a - b;
    });

    for(let i = sortedInputArray[0]; i <= sortedInputArray[1]; i++) {
        sum += i;
    }
    return sum;
}



module.exports = { getSum };

