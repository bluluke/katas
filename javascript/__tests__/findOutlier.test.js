const { findOutlier } = require('../findOutlier'); 

describe('findOutlier', () => { 
  test('Should return the single odd number from array of numbers', () => { 
    //arrange 
    const expected1 = 13; 
    const expected2 = 101; 
    const expected3 = 1; 
    const input1 = [10, 13, 20]; 
    const input2 = [18, 14, 25, 30, 40]; 
    const input3 = [99, 10, 20, 100, 10000]; 
    //act 
    const actual1 = findOutlier(input1); 
    //assert 
    expect(actual1).toBe(expected1); 
  }); 
});