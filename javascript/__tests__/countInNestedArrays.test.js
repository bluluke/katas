const { countInNestedArrays } = require('../countInNestedArrays');

describe('countInNestedArrays', () => { 
  test('Should return 1 from input of a first argument that is an array with 1 element and a matching value as the second argument', () => { 
    //arrange 
    const expected = 1; 

    const input1A = ['a']; 
    const input1B = 'a';

    const input2A = ['b']; 
    const input2B = 'b';

    const input3A = ['c']; 
    const input3B = 'c';

    //act 
    const actual1 = countInNestedArrays(input1A, input1B); 
    const actual2 = countInNestedArrays(input2A, input2B); 
    const actual3 = countInNestedArrays(input3A, input3B); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
  }); 
  test('Should return number of instances of 2nd argument value in first argument array', () => { 
    //arrange 
    const expected1 = 2; 
    const expected2 = 3; 
    const expected3 = 4; 

    const input1A = ['a', 'abc', 'abc']; 
    const input1B = 'abc'; 

    const input2A = ['abc', 'def', 'abc', 'abc', 'def', 'def']; 
    const input2B = 'def'; 

    const input3A = ['hij', 'klm', 'klm', 'hij', 'klm', 'abc', 'klm']; 
    const input3B = 'klm'; 
    //act 
    const actual1 = countInNestedArrays(input1A, input1B); 
    const actual2 = countInNestedArrays(input2A, input2B); 
    const actual3 = countInNestedArrays(input3A, input3B); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2); 
    expect(actual3).toBe(expected3); 
  });
  test('Should return number of instances of 2nd argument value in first argument array containing a nested array', () => { 
        //arrange 
        const expected1 = 2; 
        const expected2 = 5; 
        const expected3 = 3; 
    
        const input1A = ['a', 'b', ['a', 'c', 'd']]; 
        const input1B = 'a'; 
    
        const input2A = [1, 4, 3, 4, [4, 4, 4]]; 
        const input2B = 4; 
    
        const input3A = [['d', 'e'], 'e', 'e', 'f', 'g']; 
        const input3B = 'e'; 
        //act 
        const actual1 = countInNestedArrays(input1A, input1B); 
        const actual2 = countInNestedArrays(input2A, input2B); 
        const actual3 = countInNestedArrays(input3A, input3B); 
        //assert 
        expect(actual1).toBe(expected1); 
        expect(actual2).toBe(expected2); 
        expect(actual3).toBe(expected3); 
      });
      test('Should return number of instances of 2nd argument value in first argument array containing multiple nested arrays', () => { 
        //arrange 
        const expected1 = 5; 
        const expected2 = 8; 
        const expected3 = 5; 
    
        const input1A = ['a', ['a', 'g'], 'b', ['a', 'c', 'd', ['a', 'r', 'p', ['y', 'a']]]]; 
        const input1B = 'a'; 
    
        const input2A = [1, 4, 3, [3, 4], 4, [4, 4, 4, [1, 2, [4, 4]]]]; 
        const input2B = 4; 
    
        const input3A = [['d', 'e', ['d', ['e']]], 'e', 'e', 'f', ['m', 'n', 'e'],'g']; 
        const input3B = 'e'; 
        //act 
        const actual1 = countInNestedArrays(input1A, input1B); 
        const actual2 = countInNestedArrays(input2A, input2B); 
        const actual3 = countInNestedArrays(input3A, input3B); 
        //assert 
        expect(actual1).toBe(expected1); 
        expect(actual2).toBe(expected2); 
        expect(actual3).toBe(expected3); 
      });
      test('Should return 0 from first argument input of empty array', () => { 
        //arrange 
        const expected = 0; 

        const inputA = [];
        const inputB = 'f';

        //act 
        const actual = countInNestedArrays(inputA, inputB); 

        //assert 
        expect(actual).toBe(expected); 
    });
});

