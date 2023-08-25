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
return oddArray.length === 1 ? oddArray[0] : evenArray[0]
}


module.exports = { findOutlier}; 