const { maskify } = require('../maskify');

describe('Makify', () => { 
  test('Should return empty string from input of empty string', () => { 
    //arrange 
    const expected = ''; 
    const input = ''; 
    //act 
    const actual = maskify(input); 
    //assert 
    expect(actual).toBe(expected); 
  }); 
});


