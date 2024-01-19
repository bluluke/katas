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
    test('Should return single name in array from input of array containing single 4 letter string', () => {
        //arrange
        const expected1 = ['Jack'];
        const expected2 = ['Tara'];
        const expected3 = ['Lola'];

        const input1 = ['Jack'];
        const input2 = ['Tara'];
        const input3 = ['Lola'];
        //act
        const actual1 = isAFriend(input1);
        const actual2 = isAFriend(input2);
        const actual3 = isAFriend(input3);
        //assert
        expect(actual1).toEqual(expected1);
        expect(actual2).toEqual(expected2);
        expect(actual3).toEqual(expected3);
    })
})