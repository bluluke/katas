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

    let highestSum = 0;
    let highestSubseq;
for(let i = 0; i < numArr.length; i++) {
    let currentTotal = 0;
    let currentSeq = [];
    for(let j = i; j < numArr.length; j++) {
        currentTotal += numArr[j];
        currentSeq.push(numArr[j])
        if(currentTotal > highestSum) {
            highestSum = currentTotal 
            highestSubseq = currentSeq.slice()
        } 
    }
  }
  return highestSubseq;
}

module.exports = { maxSequence }