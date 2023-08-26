const sumOf2LowestPosInts = (numArray) => {
    const sortedNums = numArray.sort((a, b) => a - b);
    return sortedNums[0] + sortedNums[1];
}



module.exports = { sumOf2LowestPosInts};