const generateFibonacciSeq = (seqLength) => {
    const sequence = [];
    if(seqLength === 1) {
        sequence.push(0)
    } else if(seqLength === 2) {
        sequence.push(0, 1)
    }
    return sequence;
}


module.exports = { generateFibonacciSeq }