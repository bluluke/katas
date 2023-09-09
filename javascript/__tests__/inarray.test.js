const {inArray} = require('../inArray');

describe('inArray', () => { 
  test('Should take 2 matching single element arrays and return the single element', () => { 
    //arrange 
    const expected1 = ['apple']; 
    const expected2 = ['banana']; 
    const expected3 = ['orange']; 

    const input1a = ['apple']; 
    const input1b = ['apple']; 

    const input2a = ['banana']; 
    const input2b = ['banana']; 

    const input3a = ['orange']; 
    const input3b = ['orange']; 
    //act 
    const actual1 = inArray(input1a, input1a); 
    const actual2 = inArray(input2a, input2b); 
    const actual3 = inArray(input3a, input3b); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  }); 
  test('Should take 2 matching single element arrays and return the single element', () => { 
    //arrange 
    const expected1 = ['pple']; 
    const expected2 = ['anana']; 
    const expected3 = ['range']; 

    const input1a = ['pple']; 
    const input1b = ['apple']; 

    const input2a = ['anana']; 
    const input2b = ['banana']; 

    const input3a = ['range']; 
    const input3b = ['orange']; 
    //act 
    const actual1 = inArray(input1a, input1a); 
    const actual2 = inArray(input2a, input2b); 
    const actual3 = inArray(input3a, input3b); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  }); 
});