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
    test('Should return int sum of both input ints when absolute difference between input ints equal to 1.', () => {
        //arrange
        const expected1 = 11;
        const expected2 = -17;
        const expected3 = 112003;

        const input1A = 5;
        const input1B = 6;
        const input2A = -8;
        const input2B = -9;
        const input3A = 56001;
        const input3B = 56002;

        //act
        const actual1 = getSum(input1A, input1B);
        const actual2 = getSum(input2A, input2B);
        const actual3 = getSum(input3A, input3B);

        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
    });
    test('Should return int sum of input ints + int value between input ints when the absolute difference between inputs ints equal to 2', () => {
              //arrange
              const expected1 = 27;
              const expected2 = -261;
              const expected3 = 9030;
      
              const input1A = 8;
              const input1B = 10;
              const input2A = -88;
              const input2B = -86;
              const input3A = 3009;
              const input3B = 3011;
      
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