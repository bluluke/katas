const { likes } = require('../likes')

describe('Likes', () => { 
    test('Should return message no one likes this from input of empty array', () => { 
    //arrange 
    const expected = 'no one likes this'; 
    const input = []; 
    //act 
    const actual = likes(input); 
    //assert 
    expect(actual).toBe(expected); 
    });
    test('Should return Emma likes this from input of array containing string "Emma"', () => { 
      //arrange 
      const expected = 'Emma likes this'; 
      const input = ["Emma"]; 
      //act 
      const actual = likes(input); 
      //assert 
      expect(actual).toBe(expected); 
    });
});