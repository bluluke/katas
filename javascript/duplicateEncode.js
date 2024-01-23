const duplicateEncode = (word) => {
    if(word === '') {
        return '';
    }

    let refObj = {}; 

    const arrayWord = word.split('');
    let encodedWord = '';
    for(let i = 0; i < arrayWord.length; i++) {
        if(!refObj.hasOwnProperty(arrayWord[i])) {
            refObj[arrayWord[i]] = 1;
        } else {
            refObj[arrayWord[i]]++;
        }
    }
    
    for(let i = 0; i < arrayWord.length; i++) {
        if(refObj[arrayWord[i]] > 1) {
            encodedWord += ')';
        } else {
            encodedWord += '(';
        }
    }
    return encodedWord;

}


module.exports = { duplicateEncode };