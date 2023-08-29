const maskify = (password) => {
    if( password === '') {
        return '';
    } else if (password.length < 5) {
        return password;
    }
    const last4Charts = password.slice(-4);
    const firstPart = password.slice(0, -4).replace(/./g, '#');
    return `${firstPart}${last4Charts}`
}


module.exports = { maskify };