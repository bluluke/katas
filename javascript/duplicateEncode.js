const duplicateEncode = (word) => {
    if(word === '') {
        return '';
    }

    let refObj = {}; 

    const arrayWordUppercase = word.split('').map(char => char.toUpperCase());
    

    let encodedWord = '';
    for(let i = 0; i < arrayWordUppercase.length; i++) {
        if(!refObj.hasOwnProperty(arrayWordUppercase[i])) {
            refObj[arrayWordUppercase[i]] = 1;
        } else {
            refObj[arrayWordUppercase[i]]++;
        }
    }
    
    for(let i = 0; i < arrayWordUppercase.length; i++) {
        if(refObj[arrayWordUppercase[i]] > 1) {
            encodedWord += ')';
        } else {
            encodedWord += '(';
        }
    }
    return encodedWord;

}


module.exports = { duplicateEncode };