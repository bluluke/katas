const countInNestedArrays = (array, value) => {
    let count = 0;
    if(array[0] === value) count++
    return count;
}


module.exports = { countInNestedArrays }