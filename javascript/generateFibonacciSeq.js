const generateFibonacciSeq = (seqLength) => {
    if(seqLength < 1) {
        return []
    }
    if(seqLength === 1) {
        return [0]
    } else if(seqLength === 2) {
        return [0, 1]
    }
    const sequence = [0, 1]
    for(let i = 2; i < seqLength; i++) {
        const nextNum = sequence[i - 2] + sequence[i - 1];
        sequence.push(nextNum);
    }
    return sequence
}


module.exports = { generateFibonacciSeq }