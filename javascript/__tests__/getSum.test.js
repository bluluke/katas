const { getSum } = require('../getSum');

describe('getSum', () => {
    test('If both input ints are equal, should return int equal to one of the input ints', () => {
        //arrange
        const expected1 = 5;
        const expected2 = 1001;
        const expected3 = -5;

        const input1A = 5;
        const input1B = 5;
        const input2A = 1001;
        const input2B = 1001;
        const input3A = -5;
        const input3B = -5;

        //act
        const actual1 = getSum(input1A, input1B);
        const actual2 = getSum(input2A, input2B);
        const actual3 = getSum(input3A, input3B);

        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
    });
})