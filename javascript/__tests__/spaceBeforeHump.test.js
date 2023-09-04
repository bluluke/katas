const { spaceBeforeHump } = require('../spaceBeforeHump');

describe('spaceBeforeHump', () => { 
  test('should return single world string unchanged', () => { 
    //arrange 
    const expected = 'apple'; 
    const input = 'apple'; 
    //act 
    const actual = spaceBeforeHump(input); 
    //assert 
    expect(actual).toBe(expected); 
  }); 
  test.only('Should return 2 word string input with space between words', () => { 
    //arrange 
    const expected1 = 'apple Orange'; 
    const expected2 = 'fish Chips';
    const expected3 = 'happy Dog';

    const input1 = 'appleOrange'; 
    const input2 = 'fishChips'; 
    const input3 = 'happyDog'; 
    //act 
    const actual1 = spaceBeforeHump(input1); 
    const actual2 = spaceBeforeHump(input2); 
    const actual3 = spaceBeforeHump(input3); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2); 
    expect(actual3).toBe(expected3); 
  });
});