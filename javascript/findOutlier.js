const findOutlier = (numsArray) => {

const oddArray = []
const evenArray = [];

numsArray.forEach((num) => {
    if(num % 2 === 0) {
        evenArray.push(num)
    } else {
        oddArray.push(num)
    }
})
if(oddArray.length === 1) {
    return oddArray[0];
}
}


module.exports = { findOutlier}; 