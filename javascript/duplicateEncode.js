const duplicateEncode = (word) => {
    if(word === '') {
        return '';
    }
    const arrayWord = word.split('');
    let encodedWord = '';
    for(let i = 0; i < arrayWord.length; i++) {
        encodedWord += '(';
    }
    return encodedWord;

}


module.exports = { duplicateEncode };