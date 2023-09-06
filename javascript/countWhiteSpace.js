const countWhiteSpace = (str) => {
    if(str === '') return 0;
    return str[0] === ' '
        ? 1 + countWhiteSpace(str.slice(1))
        : countWhiteSpace(str.slice(1));
}

module.exports = { countWhiteSpace }