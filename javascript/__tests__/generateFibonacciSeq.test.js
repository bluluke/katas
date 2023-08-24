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
});