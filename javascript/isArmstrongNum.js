const isArmstrongNum = (inputNum) => {
    const stringNum = inputNum.toString();
    const arrayNum = stringNum.split('');
    const exponent = arrayNum.length;
    let totalResult = 0;
    let individualDigitResult;

   arrayNum.forEach((num, index, array) => {
    array[index] = parseInt(num, 10)
    individualDigitResult = arrayNum[index];
    const base = arrayNum[index];
    for(let i = 0; i < exponent - 1; i++) {
        individualDigitResult *= base;
    }
    totalResult += individualDigitResult; 
   })
 return totalResult === inputNum;
}



module.exports = { isArmstrongNum };