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
  test('Should return 2 word string input with space between words', () => { 
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
  test('Should return multiple word stirng input with space between words', () => { 
     //arrange 
     const expected1 = 'apples And Oranges'; 
     const expected2 = 'fish And Chips';
     const expected3 = 'the Happy Dog Runs';
 
     const input1 = 'applesAndOranges'; 
     const input2 = 'fishAndChips'; 
     const input3 = 'theHappyDogRuns'; 
     //act 
     const actual1 = spaceBeforeHump(input1); 
     const actual2 = spaceBeforeHump(input2); 
     const actual3 = spaceBeforeHump(input3); 
     //assert 
     expect(actual1).toBe(expected1); 
     expect(actual2).toBe(expected2); 
     expect(actual3).toBe(expected3);  
  });
  test('Should not put space before first letter of input if upper case', () => { 
     //arrange 
     const expected1 = 'Apples And Oranges'; 
     const expected2 = 'Fish And Chips';
     const expected3 = 'The Sad Turtle Laments';
 
     const input1 = 'ApplesAndOranges'; 
     const input2 = 'FishAndChips'; 
     const input3 = 'TheSadTurtleLaments'; 
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