const { rowSumOddNumbers} = require('../rowSumOddNumbers');

describe('rowSumOddNumbers', () => {
    test('returns integer 1 from input of integer 1', () => {
        //arrange
        const expected = 1;
        const input = 1;
        //act
        const actual = rowSumOddNumbers(input);
        //assert
        expect(actual).toBe(expected);
    });
    test('returns integer 8 from input of 2', () => {
        //arrange
        const expected = 8;
        const input = 2;
        //act
        const actual = rowSumOddNumbers(input);
        //assert
        expect(actual).toBe(expected);
    })
})