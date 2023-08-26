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
  test('Should return sum of 2 lowest positive integers from array of 3 postive integers', () => { 
    //arrange 
    const expected1 = 10; 
    const expected2 = 28; 
    const input1 = [3, 7, 12]; 
    const input2 = [12, 43, 16]
    //act 
    const actual1 = sumOf2LowestPosInts(input1); 
    const actual2 = sumOf2LowestPosInts(input2); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2)
  });
});