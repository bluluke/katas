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
});