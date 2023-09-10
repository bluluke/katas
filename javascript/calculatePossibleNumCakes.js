const calculatePossibleNumCakes = (recipe, available) => {
    const recipeIngredient = Object.keys(recipe);
    const maxCakes = available[recipeIngredient] / recipe[recipeIngredient];
    return maxCakes;
}


module.exports = { calculatePossibleNumCakes};