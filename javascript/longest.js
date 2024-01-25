const longest = (str1, str2) => {

    if(str1 === '' && str2 === '') {
        return '';
    }
    return str1 + str2;
}



module.exports = { longest };