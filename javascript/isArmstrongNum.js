const isArmstrongNum = (inputNum) => {
    const stringNum = inputNum.toString();
    const arrayNum = stringNum.split('');
    const exponent = arrayNum.length;
    let totalResult = 0;
    let individualDigitResult;

   arrayNum.forEach((num, index, array) => {
    array[index] = parseInt(num, 10)
   })

   for(let i = 0; i < arrayNum.length; i++) {
        individualDigitResult = arrayNum[i];
        const base = arrayNum[i];
        for(let i = 0; i < exponent - 1; i++) {
            individualDigitResult *= base;
        }
        totalResult += individualDigitResult; 
   }
 return totalResult === inputNum;
}



module.exports = { isArmstrongNum };