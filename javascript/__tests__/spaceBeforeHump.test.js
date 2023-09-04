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
});