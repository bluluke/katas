const { maxSequence } = require('../maxSequence');


describe('maxSequence', () => { 
  test('Should return unchanged an input array of only positive integers', () => { 
    //arrange 
    const expected1 = [4, 6, 7]; 
    const expected2 = [4, 3, 7, 8, 9]; 
    const expected3 = [4, 5, 15, 22, 19, 26]; 
    const input1 = [4, 6, 7]; 
    const input2 = [4, 3, 7, 8, 9];
    const input3 = [4, 5, 15, 22, 19, 26];
    //act 
    const actual1 = maxSequence(input1); 
    const actual2 = maxSequence(input2); 
    const actual3 = maxSequence(input3); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  }); 
});



