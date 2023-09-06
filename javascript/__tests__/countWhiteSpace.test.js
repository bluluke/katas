const { countWhiteSpace } = require('../countWhiteSpace')


describe('countWhiteSpace', () => { 
  test('Should return 1 from input of 1 white space', () => { 
    //arrange 
    const expected = 1; 
    const input = ' '; 
    //act 
    const actual = countWhiteSpace(input); 
    //assert 
    expect(actual).toBe(expected); 
  }); 
  test('Should return number of instances of white space from input of multiple white spaces', () => { 
        //arrange 
        const expected1 = 2; 
        const expected2 = 3; 
        const expected3 = 4; 
    
        const input1 = '  '; 

        const input2 = '   '; 
    
        const input3 = '    '; 

        //act 
        const actual1 = countWhiteSpace(input1); 
        const actual2 = countWhiteSpace(input2); 
        const actual3 = countWhiteSpace(input3); 
        //assert 
        expect(actual1).toBe(expected1); 
        expect(actual2).toBe(expected2); 
        expect(actual3).toBe(expected3); 
  });
  test('Should return number of instances of white space from input of multiple white spaces and characters', () => { 
        //arrange 
        const expected1 = 2; 
        const expected2 = 4; 
        const expected3 = 5; 

        const input1 = ' fg h'; 

        const input2 = 'g  h dddh '; 

        const input3 = 'fffff f d f f '; 

        //act 
        const actual1 = countWhiteSpace(input1); 
        const actual2 = countWhiteSpace(input2); 
        const actual3 = countWhiteSpace(input3); 
        //assert 
        expect(actual1).toBe(expected1); 
        expect(actual2).toBe(expected2); 
        expect(actual3).toBe(expected3); 
    });
    test('Should return 0 from string with no white spaces', () => { 
        //arrange 
        const expected = 0; 
        const input = 'jwhvedijch7446'; 
        //act 
        const actual = countWhiteSpace(input); 
        //assert 
        expect(actual).toBe(expected); 
    });
});