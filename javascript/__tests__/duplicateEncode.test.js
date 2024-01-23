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
    test('Should return a string of multiple starting parentheses equal in length to an input string containing only unique characters', () => {
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
    });
    test('Should return 2 ending parentheses from string input of 2 matching characters', () => {
        //arrange
        const expected = '))';
        
        const input1 = 'aa';
        const input2 = '55';
        const input3 = '**';

        //act
        const actual1 = duplicateEncode(input1)
        const actual2 = duplicateEncode(input2)
        const actual3 = duplicateEncode(input3)

        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
    });
    test('Should return string of parentheses corresponding to string input of both unique and matching characters', () => {
        //arrange
        const expected1 = '())((';
        const expected2 = ')(())()))';
        const expected3 = '))())())()';
        const expected4 = '))())())(';
        const expected5 = ')))))))())))(';

        const input1 = 'apple';
        const input2 = '1forever1';
        const input3 = '9success09';
        const input4 = '!!@££$%%^';
        const input5 = 'intelligently';

        //act
        const actual1 = duplicateEncode(input1);
        const actual2 = duplicateEncode(input2);
        const actual3 = duplicateEncode(input3);
        const actual4 = duplicateEncode(input4);
        const actual5 = duplicateEncode(input5);

        //assert
        expect(actual1).toBe(expected1);
        expect(actual2).toBe(expected2);
        expect(actual3).toBe(expected3);
        expect(actual4).toBe(expected4);
        expect(actual5).toBe(expected5);
    })
});