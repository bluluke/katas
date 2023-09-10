const calculatePossibleNumCakes = (recipe, available) => {

    const recipeIngredients = Object.keys(recipe);
    if(recipeIngredients.length === 0) {
        return 0
    }
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