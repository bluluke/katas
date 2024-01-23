const { duplicateEncode } = require('../duplicateEncode');

describe('duplicateEncode', () => {
    test('Should return empty string from input of empty string', () => {
        //arrange
        const expected = '';
        const input = '';

        //act
        const actual = duplicateEncode(input);

        //assert
        expect(actual).toBe(expected);
    });
    test('Should return "(" from input of single character', () => {
        //arrange
        const expected = '(';
        
        const input1 = 'd';
        const input2 = 'f';
        const input3 = 'e';

        //act
        const actual1 = duplicateEncode(input1);
        const actual2 = duplicateEncode(input2);
        const actual3 = duplicateEncode(input3);

        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
    });
    test('Should return a string of multiple starting parenthesis equal in length to an input string containing only unique characters', () => {
        //arrange
        const expected1 = '(((';
        const expected2 = '(((((';
        const expected3 = '((((((((';

        const input1 = 'abc';
        const input2 = 'def12';
        const input3 = '!@£$%^&*';

        //act
        const actual1 = duplicateEncode(input1);
        const actual2 = duplicateEncode(input2);
        const actual3 = duplicateEncode(input3);

        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
    })
});