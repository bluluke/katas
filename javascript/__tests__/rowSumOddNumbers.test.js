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
    })
})