

const { loveFunc }  = require('../loveFunc');


describe('loveFunc', () => {
    test('Should return false if both numbers are the same', () => {
        //arrange
        const expected = false;

        const input1A = 2;
        const input1B = 2;
        const input2A = 3000;
        const input2B = 3000;
        const input3A = -3;
        const input3B = -3;

        //act
        const actual1 = loveFunc(input1A, input1B);
        const actual2 = loveFunc(input2A, input2B);
        const actual3 = loveFunc(input3A, input3B);

        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
    });
    test('Should return false if both numbers are even', () => {
        //arrange
        const expected = false;

        const input1A = 2;
        const input1B = 4;
        const input2A = 3050;
        const input2B = 3000;
        const input3A = -20;
        const input3B = -30;

        //act
        const actual1 = loveFunc(input1A, input1B);
        const actual2 = loveFunc(input2A, input2B);
        const actual3 = loveFunc(input3A, input3B);

        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
    });
    test('Should return false if both numbers are odd', () => {
        //arrange
        const expected = false;

        const input1A = 3;
        const input1B = 5;
        const input2A = 3051;
        const input2B = 3001;
        const input3A = -21;
        const input3B = -33;

        //act
        const actual1 = loveFunc(input1A, input1B);
        const actual2 = loveFunc(input2A, input2B);
        const actual3 = loveFunc(input3A, input3B);

        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
    });
    test('Should return true from input of one odd integer and one even integer', () => {
        //arrange
        const expected = true;

        const input1A = 3;
        const input1B = 6;
        const input2A = 3050;
        const input2B = 3001;
        const input3A = -20;
        const input3B = -33;

        //act
        const actual1 = loveFunc(input1A, input1B);
        const actual2 = loveFunc(input2A, input2B);
        const actual3 = loveFunc(input3A, input3B);

        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
    });
});
