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
  });