const { categoriseMembers } = require('../categoriseMembers');

describe('categoriseMembers', () => { 
  test('should return array of single item "open" from input of array containing nested array: [18, 3] ', () => { 
    //arrange 
    const expected = ['open']; 
    const input = [[18, 3]]; 
    //act 
    const actual = categoriseMembers(input); 
    //assert 
    expect(actual).toEqual(expected); 
  }); 
  test('Should return array of multiple strings with value "open" from input array of array pairs, which contain both/either an age integer below 55 and/or a handicap integer below 8', () => { 
    //arrange 
    const expected1 = ['open', 'open', 'open']; 
    const expected2 = ['open', 'open', 'open', 'open']; 
    const expected3 = ['open', 'open', 'open', 'open', 'open']; 

    const input1 = [[23, 6], [49, 8], [55, 4]]; 
    const input2 = [[57, 2], [42, 21], [89, 3], [54, 8]]; 
    const input3 = [[67, 2], [16, 10], [59, 6], [41, 4], [64, 3]]; 
    //act 
    const actual1 = categoriseMembers(input1); 
    const actual2 = categoriseMembers(input2); 
    const actual3 = categoriseMembers(input3); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  });
});





