const spaceBeforeHump = (inputString) => {
    let stringToChange = inputString;
    return stringToChange;
}

// util function for spaceBeforeHump
function isUpperCase(charToCheck) {
    const upperCaseRegex = /[A-Z]/;
    return upperCaseRegex.test(charToCheck);
}

module.exports = { spaceBeforeHump, isUpperCase };