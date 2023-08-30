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
});