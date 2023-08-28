const { isArmstrongNum }= require("../isArmstrongNum");

describe.only('isArmstrongNum', () => { 
  test('Should return true from input 0', () => { 
    //arrange 
    const expected = true; 
    const input = 0; 
    //act 
    const actual = isArmstrongNum(input); 
    //assert 
    expect(actual).toBe(expected); 
  }); 
  test('Should return true from input of 1', () => { 
     //arrange 
     const expected = true; 
     const input = 1; 
     //act 
     const actual = isArmstrongNum(input); 
     //assert 
     expect(actual).toBe(expected); 
  });
  test('Should return true from input of 153', () => { 
      //arrange 
      const expected = true; 
      const input = 153; 
      //act 
      const actual = isArmstrongNum(input); 
      //assert 
      expect(actual).toBe(expected); 
  });
});