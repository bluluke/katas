const countWhiteSpace = (str) => {
    let total = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            total++
        }
    }
    return total;
}

module.exports = { countWhiteSpace }