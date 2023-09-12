const { permutations } = require('../permutations');


describe.only('permutations', () => { 
  test('Should return string input with length of 1 unchanged', () => { 
     //arrange 
        const expected1 = 'a'; 
        const expected2 = 'b'; 
        const expected3 = 'c'; 
    
        const input1 = 'a'; 
        const input2 = 'b'; 
        const input3 = 'c'; 
        //act 
        const actual1 = permutations(input1); 
        const actual2 = permutations(input2);
        const actual3 = permutations(input3);
        //assert 
        expect(actual1).toEqual(expected1); 
        expect(actual2).toEqual(expected2); 
        expect(actual3).toEqual(expected3); 
  }); 
    test('Should return string input unchanged if all characters are the same', () => { 
        //arrange 
        const expected1 = 'aaa'; 
        const expected2 = 'bbbb'; 
        const expected3 = 'ccccc'; 
    
        const input1 = 'aaa'; 
        const input2 = 'bbbb'; 
        const input3 = 'ccccc'; 
        //act 
        const actual1 = permutations(input1); 
        const actual2 = permutations(input2);
        const actual3 = permutations(input3);
        //assert 
        expect(actual1).toEqual(expected1); 
        expect(actual2).toEqual(expected2); 
        expect(actual3).toEqual(expected3); 
    });
});