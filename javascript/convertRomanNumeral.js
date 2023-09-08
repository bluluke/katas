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

    for(let i = 0; i < arrayedRomNum.length; i++) {
        switch(arrayedRomNum[i]) {
            case 'I':
                if(romNumRef[arrayedRomNum[i + 1]] > romNumRef[arrayedRomNum[i]]) {
                    numericalDecimalInt -= 1; 
                } else {
                numericalDecimalInt += 1;
                }
                break;
            case 'V':
                if(romNumRef[arrayedRomNum[i + 1]] > romNumRef[arrayedRomNum[i]]) {
                    numericalDecimalInt -= 5; 
                } else {
                numericalDecimalInt += 5;
                }
                break;
            case 'X':
                if(romNumRef[arrayedRomNum[i + 1]] > romNumRef[arrayedRomNum[i]]) {
                    numericalDecimalInt -= 10; 
                } else {
                numericalDecimalInt += 10;
                }
                break;
            case 'L':
                if(romNumRef[arrayedRomNum[i + 1]] > romNumRef[arrayedRomNum[i]]) {
                    numericalDecimalInt -= 50; 
                } else {
                numericalDecimalInt += 50;
                }
                break;
            case 'C':
                if(romNumRef[arrayedRomNum[i + 1]] > romNumRef[arrayedRomNum[i]]) {
                    numericalDecimalInt -= 100; 
                } else {
                numericalDecimalInt += 100;
                }
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