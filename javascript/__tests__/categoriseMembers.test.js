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
  test('Should return array of multiple strings with value "senior" from input array of array pairs, which contain both an age integer over 54 and a handicap over 7', () => { 
    //arrange 
    const expected1 = ["senior", "senior", "senior"]; 
    const expected2 = ["senior", "senior", "senior", "senior"]; 
    const expected3 = ["senior", "senior", "senior", "senior", "senior"]; 

    const input1 = [[59, 9], [85, 20], [65, 14]]; 
    const input2 = [[99, 9], [88, 8], [77, 12], [66, 17]]; 
    const input3 = [[98, 10], [89, 16], [58, 13], [71, 26], [63, 19]]; 
    //act 
    const actual1 = categoriseMembers(input1); 
    const actual2 = categoriseMembers(input2); 
    const actual3 = categoriseMembers(input3); 

    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  });
  test('Should return array of multiple strings with value of either "senior" or "open" depeneding on input array or array pairs', () => { 
    //arrange 
    const expected1 = ['senior', 'open', 'open']; 
    const expected2 = ['open', 'senior', 'senior', 'open']; 
    const expected3 = ['open', 'open', 'senior', 'senior', 'senior']; 

    const input1 = [[67, 8], [34, 9], [45, 3]]; 
    const input2 = [[89, 2], [89, 8], [56, 8], [56, 6]]; 
    const input3 = [[39, 14], [41, 20], [58, 15], [72, 17], [85, 18]]; 
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





