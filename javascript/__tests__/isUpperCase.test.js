const { isUpperCase } = require('../spaceBeforeHump')


describe.only('isUpperCase', () => { 
  test('Should return true from input string of single upper case letter', () => { 
    //arrange 
    const expected = true; 
    const input1 = 'P'; 
    const input2 = 'G'; 
    const input3 = 'F'; 
    //act 
    const actual1 = isUpperCase(input1); 
    const actual2 = isUpperCase(input2); 
    const actual3 = isUpperCase(input3); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
  }); 
});