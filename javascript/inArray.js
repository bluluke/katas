const inArray = (a1, a2) => {
    let resultArray = [];
    a1.forEach((a1str) =>{ 
        a2.forEach((a2str) => {
            if(a2str.includes(a1str)) {
                resultArray.push(a1str)
            }
        })
    })
    return resultArray;
}


module.exports = { inArray }; 