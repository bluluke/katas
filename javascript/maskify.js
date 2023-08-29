const maskify = (password) => {
    if( password === '') {
        return '';
    } else if (password.length < 5) {
        return password;
    }
}


module.exports = { maskify };