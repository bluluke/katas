const countInstances = (arr, target) => {
    let count = 0;
    arr.forEach((el) => {
        if(el === target) {
            count++
        }
    })
    return count;
}



const inArray = (a1, a2) => {

    let resultArray = [];
    a1.forEach((a1Str) => { 
        a2.forEach((a2Str) => {
            const a1StrCount = countInstances(a1, a1Str);
            const resulstArrayA1StrCount = countInstances(resultArray, a1Str);
            if(a2Str.includes(a1Str) && resulstArrayA1StrCount < a1StrCount) {
                resultArray.push(a1Str)
            }
        })
    })

    resultArray.sort();
    return resultArray;
}


module.exports = { inArray, countInstances }; 