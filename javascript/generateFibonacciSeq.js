const generateFibonacciSeq = (seqLength) => {
    const sequence = [];
    if(seqLength === 1) {
        sequence.push(0)
    }
    return sequence;
}


module.exports = { generateFibonacciSeq }