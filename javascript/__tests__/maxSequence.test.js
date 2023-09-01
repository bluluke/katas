const { maxSequence } = require('../maxSequence');


describe('maxSequence', () => { 
  test('Should return unchanged an input array of only positive integers', () => { 
    //arrange 
    const expected1 = [4, 6, 7]; 
    const expected2 = [4, 3, 7, 8, 9]; 
    const expected3 = [4, 5, 15, 22, 19, 26]; 
    const input1 = [4, 6, 7]; 
    const input2 = [4, 3, 7, 8, 9];
    const input3 = [4, 5, 15, 22, 19, 26];
    //act 
    const actual1 = maxSequence(input1); 
    const actual2 = maxSequence(input2); 
    const actual3 = maxSequence(input3); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  }); 
  test('Should return 0 from input array of only negative numbers', () => { 
        //arrange 
    const expected = 0;

    const input1 = [-4, -25, -5]; 
    const input2 = [-4, -96, -46, -37, -49, -79]; 
    const input3 = [-35, -23, -29, -83, -51, -894, -45];  
    //act 
    const actual1 = maxSequence(input1); 
    const actual2 = maxSequence(input2);
    const actual3 = maxSequence(input3);
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
  });
  test('Should return subsequence which excludes single negative integer from input array', () => { 
    //arrange 
    const expected1 = [4, 6, 7]; 
    const expected2 = [4, 3, 7, 8, 9]; 
    const expected3 = [4, 5, 15, 22, 19, 26]; 
    const input1 = [4, 6, 7, -5]; 
    const input2 = [-22, 4, 3, 7, 8, 9];
    const input3 = [4, 5, 15, 22, 19, 26, -4];
    //act 
    const actual1 = maxSequence(input1); 
    const actual2 = maxSequence(input2); 
    const actual3 = maxSequence(input3); 
    //assert 
    expect(actual1).toEqual(expected1); 
    expect(actual2).toEqual(expected2); 
    expect(actual3).toEqual(expected3); 
  });
  test('Should return subsequence with highest sum from input array', () => { 
       //arrange 
       const expected1 = [6, 7]; 
       const expected2 = [8, 9]; 
       const expected3 = [5, 15, 22, 19, 26]; 
       const input1 = [4, -9, 6, 7, -5]; 
       const input2 = [-22, 4, 3, 7, -15, 8, 9];
       const input3 = [4, -6, 5, 15, 22, 19, 26, -4];
       //act 
       const actual1 = maxSequence(input1); 
       const actual2 = maxSequence(input2); 
       const actual3 = maxSequence(input3); 
       //assert 
       expect(actual1).toEqual(expected1); 
       expect(actual2).toEqual(expected2); 
       expect(actual3).toEqual(expected3); 
  });
  test('Should return empty array input of empty array', () => { 
        //arrange 
        const expected = []; 
        const input = []; 
        //act 
        const actual = maxSequence(input); 
        //assert 
        expect(actual).toEqual(expected); 
  });
});



