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
  test('Should return sum of 2 lowest lowest positive integers from array of varying length', () => { 
    //arrange 
    const expected1 = 17; 
    const expected2 = 2; 
    const expected3 = 23456; 

    const input1 = [14, 99, 105, 3, 63, 10000]; 
    const input2 = [1, 2, 1, 7, 93]; 
    const input3 = [100000, 20000, 3456, 800003, 987987987]; 
    //act 
    const actual1 = sumOf2LowestPosInts(input1); 
    const actual2 = sumOf2LowestPosInts(input2); 
    const actual3 = sumOf2LowestPosInts(input3); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2);
    expect(actual3).toBe(expected3);
  });
});