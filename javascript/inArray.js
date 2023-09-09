const inArray = (a1, a2) => {
    let resultArray = [];
    if(a2[0].includes(a1[0])) {
        resultArray.push(a1[0])
    }
    return resultArray;
}


module.exports = { inArray }; 