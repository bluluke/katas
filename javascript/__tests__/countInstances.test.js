const { countInstances } = require('../inArray')

describe('countInstances', () => { 
    test('Should return 1 input of single element array and matching target.', () => { 
       //arrange 
   const expected = 1; 
  
   const input1a = ['a']; 
   const input1b = 'a'; 
  
   const input2a = ['b']; 
   const input2b = 'b'; 
  
   const input3a = ['c']; 
   const input3b = 'c'; 
   //act 
   const actual1 = countInstances(input1a, input1b); 
   const actual2 = countInstances(input2a, input2b); 
   const actual3 = countInstances(input3a, input3b); 
   //assert 
   expect(actual1).toBe(expected); 
   expect(actual2).toBe(expected); 
   expect(actual3).toBe(expected); 
    }); 
    test('Should return number of non-unique multiple elements from first argument array which match second argument target element.', () => { 
       //arrange 
 const expected1 = 3; 
 const expected2 = 4; 
 const expected3 = 5; 

 const input1a = ['a', 'a', 'a']; 
 const input1b = 'a'; 

 const input2a = ['b', 'b', 'b', 'b']; 
   const input2b = 'b'; 
  
   const input3a = ['c', 'c', 'c', 'c', 'c']; 
   const input3b = 'c'; 
 //act 
 const actual1 = countInstances(input1a, input1b); 
 const actual2 = countInstances(input2a, input2b); 
 const actual3 = countInstances(input3a, input3b); 
 //assert 
 expect(actual1).toBe(expected1); 
 expect(actual2).toBe(expected2); 
 expect(actual3).toBe(expected3); 
    });
    test('Should return number of elements from non-uniform first argument array which match second argument target element.', () => { 
        //arrange 
  const expected1 = 3; 
  const expected2 = 4; 
  const expected3 = 5; 
 
  const input1a = ['a', 'b', 'a', 'c', 'a']; 
  const input1b = 'a'; 
 
  const input2a = ['b', 'a', 'b', 'c', 'b', 'b', 'd']; 
    const input2b = 'b'; 
   
    const input3a = ['c', 'd', 'a', 'c', 'g', 'c', 'h', 'c', 'c']; 
    const input3b = 'c'; 
  //act 
  const actual1 = countInstances(input1a, input1b); 
  const actual2 = countInstances(input2a, input2b); 
  const actual3 = countInstances(input3a, input3b); 
  //assert 
  expect(actual1).toBe(expected1); 
  expect(actual2).toBe(expected2); 
  expect(actual3).toBe(expected3); 
     });
     test('Should return 0 when no elements from first argument array match second argument target element', () => { 
       //arrange 
  const expected = 0; 

 
  const input1a = ['a', 'b', 'a', 'c', 'a']; 
  const input1b = 'h'; 
 
  const input2a = ['b', 'a', 'b', 'c', 'b', 'b', 'd']; 
    const input2b = 'z'; 
   
    const input3a = ['c', 'd', 'a', 'c', 'g', 'c', 'h', 'c', 'c']; 
    const input3b = 'x'; 
  //act 
  const actual1 = countInstances(input1a, input1b); 
  const actual2 = countInstances(input2a, input2b); 
  const actual3 = countInstances(input3a, input3b); 
  //assert 
  expect(actual1).toBe(expected); 
  expect(actual2).toBe(expected); 
  expect(actual3).toBe(expected); 
     });
  });