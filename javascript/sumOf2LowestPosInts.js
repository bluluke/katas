const sumOf2LowestPosInts = (numArray) => {
    const sortedNums = numArray.sort((a, b) => a - b);
    const sortedPosInts = sortedNums.filter((num) => {
        return num > 0
    }) 

    return sortedPosInts[0] + sortedPosInts[1];
}



module.exports = { sumOf2LowestPosInts};