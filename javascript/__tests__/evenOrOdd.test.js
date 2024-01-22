const { evenOrOdd } = require('../evenOrOdd');

describe('evenOrOdd', () => {
    test('Should return the string "Even" when receives input of an integer 0', () => {
        //arrange
        const expected = 'Even';
        const input = 0;
        //act
        const actual = evenOrOdd(input);
        //assert
        expect(actual).toBe(expected);
    });
    test('Should return the string "Even" from input of any even integer', () => {
        //assert
        const expected = 'Even';

        const input1 = 2;
        const input2 = 100;
        const input3 = 1046;

        //act
        const actual1 = evenOrOdd(input1);
        const actual2 = evenOrOdd(input2);
        const actual3 = evenOrOdd(input3);

        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
    });
    test('Should return string "Odd" from input of odd integer', () => {
        //arrange
        const expected = 'Odd';
        
        const input1 = 99;
        const input2 = 57;
        const input3 = 10035;

        //act
        const actual1 = evenOrOdd(input1);
        const actual2 = evenOrOdd(input2);
        const actual3 = evenOrOdd(input3);

        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
    })
}); 