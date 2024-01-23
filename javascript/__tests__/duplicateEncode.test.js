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
    })
});