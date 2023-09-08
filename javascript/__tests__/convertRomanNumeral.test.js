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
  test('Should return value of multiple character input as numerical decimal integer', () => { 
    // arrange 
    const expected1 = 3; 
    const expected2 = 7; 
    const expected3 = 17; 
    const expected4 = 75; 
    const expected5 = 165; 
    const expected6 = 755; 
    const expected7 = 1666; 


    const input1 = 'III';
    const input2 = 'VII'; 
    const input3 = 'XVII'; 
    const input4 = 'LXXV';
    const input5 = 'CLXV';
    const input6 = 'DCCLV'; 
    const input7 = 'MDCLXVI'; 

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
  test('Should return Roman numeral input using subtractive notation with the value as a numeric decimal integer', () => { 
   // arrange 
   const expected1 = 4; 
   const expected2 = 9; 
   const expected3 = 40; 
   const expected4 = 90; 
   const expected5 = 400; 
   const expected6 = 900; 
   const expected7 = 990; 


   const input1 = 'IV';
   const input2 = 'IX'; 
   const input3 = 'XL'; 
   const input4 = 'XC';
   const input5 = 'CD';
   const input6 = 'CM'; 
   const input7 = 'XM'; 

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
  test('Should return Roman numeral input using both subtractive and additive notation', () => { 
   // arrange 
   const expected1 = 254; 
   const expected2 = 1999; 
   const expected3 = 609; 
   const expected4 = 420; 
   const expected5 = 907; 
   const expected6 = 4950; 
   const expected7 = 91; 
   const expected8 = 290; 
   const expected9 = 590; 
   const expected10 = 1640; 

   const input1 = 'CCLIV';
   const input2 = 'MIM'; 
   const input3 = 'DCIX'; 
   const input4 = 'CDXX';
   const input5 = 'CMVII';
   const input6 = 'MMMMLM'; 
   const input7 = 'XCI'; 
   const input8 = 'CCXC'; 
   const input9 = 'DXC'; 
   const input10 = 'MDCXL'; 

   //act 
   const actual1 = convertRomanNumeral(input1); 
   const actual2 = convertRomanNumeral(input2); 
   const actual3 = convertRomanNumeral(input3); 
   const actual4 = convertRomanNumeral(input4); 
   const actual5 = convertRomanNumeral(input5); 
   const actual6 = convertRomanNumeral(input6); 
   const actual7 = convertRomanNumeral(input7); 
   const actual8 = convertRomanNumeral(input8); 
   const actual9 = convertRomanNumeral(input9); 
   const actual10 = convertRomanNumeral(input10); 
   //assert 
   expect(actual1).toBe(expected1); 
   expect(actual2).toBe(expected2); 
   expect(actual3).toBe(expected3); 
   expect(actual4).toBe(expected4); 
   expect(actual5).toBe(expected5); 
   expect(actual6).toBe(expected6); 
   expect(actual7).toBe(expected7); 
   expect(actual8).toBe(expected8); 
   expect(actual9).toBe(expected9); 
   expect(actual10).toBe(expected10); 
  });
  test('Should return 0 from empth input', () => { 
    //arrange 
    const expected = 0; 
    const input = ''; 
    //act 
    const actual = convertRomanNumeral(input); 
    //assert 
    expect(actual).toBe(expected); 
  });
});