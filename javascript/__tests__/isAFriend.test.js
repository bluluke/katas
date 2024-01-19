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
    });
    test('Should return multiple names in array from input of array containing multiple 4 letter strings', () => {
        //arrange
        const expected1 = ['Jack', 'Tara', 'Lola'];
        const expected2 = ['Tara', 'Jack', 'Lola', 'John'];
        const expected3 = ['Lola', 'John', 'Rino', 'Tina', 'Kate'];

        const input1 = ['Jack', 'Tara', 'Lola'];
        const input2 = ['Tara', 'Jack', 'Lola', 'John'];
        const input3 = ['Lola', 'John', 'Rino', 'Tina', 'Kate'];
        //act
        const actual1 = isAFriend(input1);
        const actual2 = isAFriend(input2);
        const actual3 = isAFriend(input3);
        //assert
        expect(actual1).toEqual(expected1);
        expect(actual2).toEqual(expected2);
        expect(actual3).toEqual(expected3);
    });
    test('Should return empty array from input of array containg single string with length other than 4', () => {
        //arrange
        const expected = [];

        const input1 = ['Sarah'];
        const input2 = ['Hal', 'Patrick'];
        const input3 = ['Clarissa', 'Francesca', 'Salvatore'];
        //act
        const actual1 = isAFriend(input1);
        const actual2 = isAFriend(input2);
        const actual3 = isAFriend(input3);

        //assert
        expect(actual1).toEqual(expected);
        expect(actual2).toEqual(expected);
        expect(actual3).toEqual(expected);
    });
    test('Should return array of names with length of 4 letters from input of array containing some 4 letter names and some non 4 letter names', () => {
        //arrange
        const expected1 = ['Fran', 'Carl'];
        const expected2 = ['Jack', 'Lola', 'Greg'];
        const expected3 = ['Tina', 'Jill', 'Luke'];

        const input1 = ['Helen', 'Fran', 'Carl', 'Lorenzo'];
        const input2 = ['Jack', 'Gloria', 'Lola', 'Beatrice', 'Greg', 'Casandra'];
        const input3 = ['Tina', 'Nicole', 'Jemma', 'Caitlin', 'Jessica', 'Jill', 'Luke'];
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