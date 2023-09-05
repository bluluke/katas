const countInNestedArrays = (array, value) => {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) count++
        if(Array.isArray(array[i])) count += countInNestedArrays(array[i], value)
    }
    return count;
}


module.exports = { countInNestedArrays }