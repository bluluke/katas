const calculatePossibleNumCakes = (recipe, available) => {
    const recipeIngredients = Object.keys(recipe);
    let maxPerIngredient = [];
    recipeIngredients.forEach((ingredient) => {
        maxPerIngredient.push(available[ingredient] / recipe[ingredient]);
       
    })

    return maxPerIngredient[0]
}


module.exports = { calculatePossibleNumCakes};