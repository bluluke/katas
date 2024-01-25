const longest = (str1, str2) => {

    if(str1 === '' && str2 === '') {
        return '';
    }

    const arrayString = str1.split('').concat(str2.split('')).sort();
    return arrayString.join('');
}



module.exports = { longest };