const { sumOf2LowestPosInts} = require('../sumOf2LowestPosInts');

describe('Should return ', () => { 
  test('Should return the sum of 2 numbers from an array of 2 positive integers', () => { 
    //arrange 
    const expected = 8; 
    const input = [5, 3]; 
    //act 
    const actual = sumOf2LowestPosInts(input); 
    //assert 
    expect(actual).toBe(expected); 
  }); 
});