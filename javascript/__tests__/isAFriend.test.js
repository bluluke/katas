const {isAFriend} =  require('../isAFriend');

describe('isAFriend', () => {
    test('Should return empty array from input of single empty string in array', () => {
        //arrange
        const expected = [];
        const input = [''];
        //act
        const actual = isAFriend(input);
        //assert
        expect(actual).toEqual(expected);
    })
})