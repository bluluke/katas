const calculatePossibleNumCakes = (recipe, available) => {
    const recipeIngredients = Object.keys(recipe);
    let maxPerIngredient = [];
    recipeIngredients.forEach((ingredient) => {
        maxPerIngredient.push(available[ingredient] / recipe[ingredient]);
       
    })

    const minNumber = Math.min(...maxPerIngredient);
    return Math.floor(minNumber);
}


module.exports = { calculatePossibleNumCakes};