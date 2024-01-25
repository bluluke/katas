const { longest } =  require('../longest');

describe('longest', () => {
    test('Should return empty string from input of 2 empty strings', () => {
        //arrange
        const expected = '';

        const inputA = '';
        const inputB = '';

        //act
        const actual = longest(inputA, inputB);

        //assert
        expect(actual).toBe(expected);
    }) 
})