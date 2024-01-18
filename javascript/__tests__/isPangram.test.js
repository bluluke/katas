const {isPangram }= require("../isPangram");

describe('isPangram', () => {
    test('Should return false from input of empty string', () => {
        //arrange
        const expected = false;
        const input = '';
        //act
        const actual = isPangram(input);
        //assert
        expect(actual).toBe(expected);
    })
})



