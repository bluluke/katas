const maxSequence = (numArr) => {
    let allPositive = true;
    const result = numArr.forEach((num) => {
        if(num < 0) {
            allPositive = false
        };
    })
    if(allPositive) return numArr;
}

module.exports = { maxSequence }