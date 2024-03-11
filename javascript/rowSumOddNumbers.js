const rowSumOddNumbers = (n) => {

    let numToSkip = 0; 
 
for(let i = 1; i <= n; i++) {
    if(i !== n) {
        numToSkip += i; 
    } 
}

let oddNum = 1;
for(let i = 0; i < numToSkip; i++) {
    oddNum +=2;
}

let total = 0;
for(let i = 1; i <= n; i++) {
    total += oddNum;
    oddNum += 2;
}
return total;
}


module.exports = { rowSumOddNumbers };