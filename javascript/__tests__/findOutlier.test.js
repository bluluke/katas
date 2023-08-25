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
  test('', () => { 
    //arrange 
    const expected1 = 40; 
    const expected2 = 5002; 
    const expected3 = 650; 

    const input1 = [17, 40, 165]; 
    const input2 = [5002, 77, 89, 1001, 3567]; 
    const input3 = [91, 7005, 6543, 89, 43, 650]; 
    //act 
    const actual1 = findOutlier(input1); 
    const actual2 = findOutlier(input2); 
    const actual3 = findOutlier(input3); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2); 
    expect(actual3).toBe(expected3); 
  });
});