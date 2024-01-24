const getSum = (int1, int2) => {
    if(int1 === int2) {
        return int1;
    }
    let sum = int1 + int2;
    return sum;
}



module.exports = { getSum };

