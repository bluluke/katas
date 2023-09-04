const spaceBeforeHump = (inputString) => {
    const stringToChange = inputString;
    const arrayWithSpaceBeforeHump = Array.prototype.map.call( stringToChange, (char, index) => {
        if(isUpperCase(char) && index !== 0) {
            return ` ${char}`
        } else {
            return char
        }
    })
    const joinedString  = arrayWithSpaceBeforeHump.join('');
    return joinedString;
}

// util function for spaceBeforeHump
function isUpperCase(charToCheck) {
    const upperCaseRegex = /[A-Z]/;
    return upperCaseRegex.test(charToCheck);
}

module.exports = { spaceBeforeHump, isUpperCase };