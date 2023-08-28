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
});