const convertRomanNumeral = (romNum) => {

    let numericalDecimalInt = 0;

    switch(romNum) {
        case 'I':
            numericalDecimalInt += 1;
            break;
        case 'V':
            numericalDecimalInt += 5;
            break;
        case 'X':
            numericalDecimalInt += 10;
            break;
        case 'L':
            numericalDecimalInt += 50;
            break;
        case 'C':
            numericalDecimalInt += 100;
            break;
        case 'D':
            numericalDecimalInt += 500;
            break;
        case 'M':
            numericalDecimalInt += 1000;
            break;
    }
    return numericalDecimalInt;
    
}

module.exports = { convertRomanNumeral };