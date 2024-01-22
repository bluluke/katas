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
    })
}); 