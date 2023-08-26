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
  test('Should return sum of 2 lowest postive integers from array of positive and negative integers', () => { 
    //arrange 
    const expected1 = 13; 
    const expected2 = 590; 
    const expected3 = 40; 

    const input1 = [-9, 7, 89, -22, 600, 6]; 
    const input2 = [300, -8, 301, -1, 290]; 
    const input3 = [45, 25, 90, -5, -90, 30, 15]; 
    //act 
    const actual1 = sumOf2LowestPosInts(input1);
    const actual2 = sumOf2LowestPosInts(input2);
    const actual3 = sumOf2LowestPosInts(input3); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2); 
    expect(actual3).toBe(expected3); 
  });
  test('Should return sum of 2 lowest positive integers from array including integers and floating points', () => { 
    //arrange 
    const expected1 = 27; 
    const expected2 = 7; 
    const expected3 = 85; 

    const input1 = [14, 12.6, -9, 13]; 
    const input2 = [2, 4.5, 5, -88, 35]; 
    const input3 = [439, 289, 46, 33.5, 39, -76]; 
    //act 
    const actual1 = sumOf2LowestPosInts(input1); 
    const actual2 = sumOf2LowestPosInts(input2); 
    const actual3 = sumOf2LowestPosInts(input3); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2); 
    expect(actual3).toBe(expected3); 
  });
  test('Should return null if input array does not contain at least 2 postive integers', () => { 
    //arrange 
    const expected = null; 

    const input1 = [87, 33.3, -9, -80, 44.5]; 
    const input2 = [-3, 0, -39, 4, 4.2, 7.9]; 
    const input3 = [2345.6, 8.9, -9, -33, -57, 3.4]; 
    //act 
    const actual1 = sumOf2LowestPosInts(input1); 
    const actual2 = sumOf2LowestPosInts(input2); 
    const actual3 = sumOf2LowestPosInts(input3); 
    //assert 
    expect(actual1).toBe(expected); 
     expect(actual2).toBe(expected); 
      expect(actual3).toBe(expected); 
  });
});