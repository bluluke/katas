const { countInNestedArrays } = require('../countInNestedArrays');

describe('countInNestedArrays', () => { 
  test('Should return 1 from input of a first argument that is an array with 1 element and a matching value as the second argument', () => { 
    //arrange 
    const expected = 1; 

    const input1A = ['a']; 
    const input1B = 'a';

    const input2A = ['b']; 
    const input2B = 'b';

    const input3A = ['c']; 
    const input3B = 'c';

    //act 
    const actual1 = countInNestedArrays(input1A, input1B); 
    const actual2 = countInNestedArrays(input2A, input2B); 
    const actual3 = countInNestedArrays(input3A, input3B); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
  }); 
});