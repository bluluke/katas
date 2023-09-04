const { isUpperCase } = require('../spaceBeforeHump')


describe('isUpperCase', () => { 
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
  test('Should return false from input that is not upper case letter', () => { 
    //arrange 
    const expected = false; 
    const input1 = 'g'; 
    const input2 = 'o'; 
    const input3 = 5; 
    const input4 = '/'; 
    const input5 = '&'; 
    //act 
    const actual1 = isUpperCase(input1); 
    const actual2 = isUpperCase(input2); 
    const actual3 = isUpperCase(input3); 
    const actual4 = isUpperCase(input4); 
    const actual5 = isUpperCase(input5); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
    expect(actual4).toBe(expected); 
    expect(actual5).toBe(expected); 
  });
});