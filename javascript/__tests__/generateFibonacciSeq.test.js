const {generateFibonacciSeq} = require('../generateFibonacciSeq');

describe('generateFibonacciSeq', () => { 
  test('Should return array containing 0 from input of 1', () => { 
    //arrange 
    const expected = [0]; 
    const input = 1; 
    //act 
    const actual = generateFibonacciSeq(input); 
    //assert 
    expect(actual).toEqual(expected); 
  }); 
  test('Should return [0, 1] from input of 2', () => { 
    //arrange 
    const expected = [0, 1]; 
    const input = 2; 
    //act 
    const actual = generateFibonacciSeq(input); 
    //assert 
    expect(actual).toEqual(expected); 
  });
  test('Should return [0, 1, 1] from input of 3, [0, 1, 1, 2, 3] from input of 5, [0, 1, 1, 2, 3, 5, 8, 13] from input of 8', () => { 
    //arrange 
    const expected1 = [0, 1, 1] ; 
    const expected2 = [0, 1, 1, 2, 3];
    const expected3 = [0, 1, 1, 2, 3, 5, 8, 13];

    const input1 = 3; 
    const input2 = 5; 
    const input3 = 8; 
    //act 
    const actual1 = generateFibonacciSeq(input1); 
    const actual2 = generateFibonacciSeq(input2); 
    const actual3 = generateFibonacciSeq(input3); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  });
});