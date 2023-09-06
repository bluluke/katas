const countWhiteSpace = (str, count = 0) => {
    if(str === '') return count;
    if(str[0] === ' ') count++;
    return countWhiteSpace(str.slice(1), count);
}

module.exports = { countWhiteSpace }