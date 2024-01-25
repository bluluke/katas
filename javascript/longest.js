const longest = (str1, str2) => {

    if(str1 === '' && str2 === '') {
        return '';
    }

    let refObj = {};
    let sortedUniqueCharcterString = ''; 

    const characterArray = str1.toLowerCase().split('').concat(str2.toLowerCase().split('')).sort();

    for(const char of characterArray) {
        if(!refObj.hasOwnProperty(char)) {
            refObj[char] = char; 
        } 
    }
    for(const prop in refObj) {
        sortedUniqueCharcterString += prop;
    }

    return sortedUniqueCharcterString;
}



module.exports = { longest };