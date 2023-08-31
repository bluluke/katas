const { likes } = require('../likes')

describe('Likes', () => { 
    test('Should return message no one likes this from input of empty array', () => { 
        //arrange 
        const expected = 'no one likes this'; 
        const input = []; 
        //act 
        const actual = likes(input); 
        //assert 
        expect(actual).toBe(expected); 
        });
    test('Should return Emma likes this from input of array containing string "Emma"', () => { 
      //arrange 
      const expected = 'Emma likes this'; 
      const input = ["Emma"]; 
      //act 
      const actual = likes(input); 
      //assert 
      expect(actual).toBe(expected); 
    });
    test('Should return (input array item 1) and (input array item 2) like this from input of array containing 2 strings', () => { 
      //arrange 
      const expected1 = "Frank and Barbera like this"; 
      const expected2 = "Sarah and Jessica like this"; 
      const expected3 = "Paul and Deborah like this"; 
      const input1 = ["Frank", "Barbera"]; 
      const input2 = ['Sarah', 'Jessica']; 
      const input3 = ['Paul', 'Deborah']; 
      //act 
      const actual1 = likes(input1); 
      const actual2 = likes(input2); 
      const actual3 = likes(input3); 
      //assert 
      expect(actual1).toBe(expected1); 
      expect(actual2).toBe(expected2);
      expect(actual3).toBe(expected3);
    });
    test('Should return (input array item 1), (input array item 2) and (input array item 3) like this from input array containing 3 strings', () => { 
          //arrange 
          const expected1 = 'Frank, Sandra and Barbera like this'; 
          const expected2 = 'Sarah, Kevin and Jessica like this'; 
          const expected3 = 'Paul, Hannah and Deborah like this'; 
          const input1 = ['Frank', 'Sandra', 'Barbera']; 
          const input2 = ['Sarah', "Kevin", 'Jessica']; 
          const input3 = ['Paul', 'Hannah', 'Deborah']; 
          //act 
          const actual1 = likes(input1); 
          const actual2 = likes(input2); 
          const actual3 = likes(input3); 
          //assert 
          expect(actual1).toBe(expected1); 
          expect(actual2).toBe(expected2); 
          expect(actual3).toBe(expected3); 
    });
    test('Should return appropriate message from input array of 4 or more strings', () => { 
            //arrange 
        const expected1 = 'Frank, Sandra and 2 others like this'; 
        const expected2 = 'Sarah, Kevin and 5 others like this'; 
        const expected3 = 'Paul, Hannah and 7 others like this'; 
        const input1 = ['Frank', 'Sandra', 'Barbera', 'Jessica']; 
        const input2 = ['Sarah', "Kevin", 'Jessica', 'Frank', 'Sandra', 'Barbera', 'Deborah']; 
        const input3 = ['Paul', 'Hannah', 'Deborah', 'Sarah', "Kevin", 'Jessica', 'Frank', 'Sandra', 'Barbera']; 
        //act 
        const actual1 = likes(input1); 
        const actual2 = likes(input2); 
        const actual3 = likes(input3); 
        //assert 
        expect(actual1).toBe(expected1); 
        expect(actual2).toBe(expected2); 
        expect(actual3).toBe(expected3); 
    }); 
    test('Should not alter input', () => { 
        //arrange
        const input = ['Frank', 'Sandra', 'Barbera', 'Jessica']; 
        const copyInput = ['Frank', 'Sandra', 'Barbera', 'Jessica'];
        //act 
        likes(input)
        //assert 
        expect(input).toEqual(copyInput); 
    });
    test('Output should not have same reference as input', () => { 
      //arrange 
      const input = ['Sarah', "Kevin", 'Jessica', 'Frank', 'Sandra', 'Barbera', 'Deborah']; 
      //act 
      const actual = likes(input)
      //assert 
      expect(actual).not.toBe(input); 
    });
});
