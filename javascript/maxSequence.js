const maxSequence = (numArr) => {
    let allPositive = true;
    let allNegative = true; 
    const result = numArr.forEach((num) => {
        if(num < 0) {
            allPositive = false
        };
        if(num >= 0) {
            allNegative = false;
        }
    })
    if(allPositive) return numArr;
    if(allNegative) return 0;
}

module.exports = { maxSequence }