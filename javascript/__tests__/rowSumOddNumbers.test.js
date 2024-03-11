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
    });
    test('from a triangle comprised of ascending odd numbers, return the sum of the row indicated by the input integer', () => {
        //act
        const expected1 = 27 ;
        const expected2 = 64;
        const expected3 = 125;
        const expected4 = 216;

        const input1 = 3;
        const input2 = 4;
        const input3 = 5;
        const input4 = 6;
        //act
        const actual1 = rowSumOddNumbers(input1);
        const actual2 = rowSumOddNumbers(input2);
        const actual3 = rowSumOddNumbers(input3);
        const actual4 = rowSumOddNumbers(input4);
        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
        expect(actual4).toBe(expected4);
    })
})