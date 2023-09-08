const { convertRomanNumeral } = require('../convertRomanNumeral');


describe.only('convertRomanNumeral', () => { 
  test('Should take single character input and return value as numerical decimal integer', () => { 
        // arrange 
        const expected1 = 1; 
        const expected2 = 5; 
        const expected3 = 10; 
        const expected4 = 50; 
        const expected5 = 100; 
        const expected6 = 500; 
        const expected7 = 1000; 


        const input1 = 'I';
        const input2 = 'V'; 
        const input3 = 'X'; 
        const input4 = 'L';
        const input5 = 'C';
        const input6 = 'D'; 
        const input7 = 'M'; 

        //act 
        const actual1 = convertRomanNumeral(input1); 
        const actual2 = convertRomanNumeral(input2); 
        const actual3 = convertRomanNumeral(input3); 
        const actual4 = convertRomanNumeral(input4); 
        const actual5 = convertRomanNumeral(input5); 
        const actual6 = convertRomanNumeral(input6); 
        const actual7 = convertRomanNumeral(input7); 
        //assert 
        expect(actual1).toBe(expected1); 
        expect(actual2).toBe(expected2); 
        expect(actual3).toBe(expected3); 
        expect(actual4).toBe(expected4); 
        expect(actual5).toBe(expected5); 
        expect(actual6).toBe(expected6); 
        expect(actual7).toBe(expected7); 
  }); 
});