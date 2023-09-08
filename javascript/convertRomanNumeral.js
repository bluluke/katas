const convertRomanNumeral = (romNum) => {

    let numericalDecimalInt = 0;
    const arrayedRomNum = romNum.split('');
    

    const romNumRef = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const subtractOrAdd = (nextNumeral, currentNumeral) => {
        if(nextNumeral > currentNumeral) {
            numericalDecimalInt -= currentNumeral; 
        } else {
        numericalDecimalInt += currentNumeral;
        }
    }
    

    for(let i = 0; i < arrayedRomNum.length; i++) {
        switch(arrayedRomNum[i]) {
            case 'I':
                subtractOrAdd(romNumRef[arrayedRomNum[i + 1]], romNumRef[arrayedRomNum[i]])
                break;
            case 'V':
                subtractOrAdd(romNumRef[arrayedRomNum[i + 1]], romNumRef[arrayedRomNum[i]])
                break;
            case 'X':
                subtractOrAdd(romNumRef[arrayedRomNum[i + 1]], romNumRef[arrayedRomNum[i]])
                break;
            case 'L':
                subtractOrAdd(romNumRef[arrayedRomNum[i + 1]], romNumRef[arrayedRomNum[i]])
                break;
            case 'C':
                subtractOrAdd(romNumRef[arrayedRomNum[i + 1]], romNumRef[arrayedRomNum[i]])
                break;
            case 'D':
                numericalDecimalInt += 500;
                break;
            case 'M':
                numericalDecimalInt += 1000;
                break;
        }
    }
    
    
    return numericalDecimalInt;
    
}

module.exports = { convertRomanNumeral };