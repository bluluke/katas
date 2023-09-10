const calculatePossibleNumCakes = (recipe, available) => {
    const recipeIngredients = Object.keys(recipe);
    let maxPerIngredient = [];
    recipeIngredients.forEach((ingredient) => {
        maxPerIngredient.push(available[ingredient] / recipe[ingredient]);
       
    })
    const minNumber = Math.min(...maxPerIngredient);
    if(isNaN(minNumber)) {
        return 0;
    }
    return Math.floor(minNumber);
}


module.exports = { calculatePossibleNumCakes};