const permutations = (inputStr) => {
    const arrayedInput = inputStr.split('');
    const arrayedInputFirstEl = arrayedInput[0];
    let allSame = true;
    arrayedInput.forEach((el) => {
        if(el !== arrayedInputFirstEl) {
            allSame = false; 
        } 
    })
    if(allSame) {
        return [inputStr];
    }
}

module.exports = { permutations };