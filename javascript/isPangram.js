const makeUppercase = (str) => {
    return str.toUpperCase();
}

const isPangram = (str) => {
    if(!str) {
        return false;
    } 
    const alphabetRefObj = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
        H: 0,
        I: 0, 
        J: 0,
        K: 0,
        L: 0,
        M: 0,
        N: 0,
        O: 0,
        P: 0,
        Q: 0,     
        R: 0,
        S: 0,
        T: 0,
        U: 0,
        V: 0,
        W: 0,
        X: 0,
        Y: 0,
        Z: 0
    }

    const uppercaseStr = makeUppercase(str);
    const arrayStr = [...uppercaseStr];

    arrayStr.forEach((char) => {
        if(alphabetRefObj.hasOwnProperty(char)) {
            alphabetRefObj[char]++;
        }
    })

    let hasAllOfAlphabet = true;
    for(const char in alphabetRefObj) {
        if(alphabetRefObj[char] < 1) {
            hasAllOfAlphabet = false;
        }
    }
    return hasAllOfAlphabet; 
}



module.exports = { makeUppercase, isPangram};