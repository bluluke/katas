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
  test('Should return true from input of 370, 371, 1634, 8208, 9474, ', () => { 
    //arrange 
    const expected = true; 
    const input1 = 370;
    const input2 = 371;
    const input3 = 407;
    const input4 = 1634;
    const input5 = 8208; 
    //act 
    const actual1 = isArmstrongNum(input1); 
    const actual2 = isArmstrongNum(input2); 
    const actual3 = isArmstrongNum(input3); 
    const actual4 = isArmstrongNum(input4); 
    const actual5 = isArmstrongNum(input5); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
    expect(actual4).toBe(expected); 
    expect(actual5).toBe(expected); 
});
test('Should return false from input of 33, 208, 4003, 6894, 9043 ', () => { 
  //arrange 
  const expected = false; 
  const input1 = 33;
    const input2 = 208;
    const input3 = 4003;
    const input4 = 6894;
    const input5 = 9043; 
    //act 
    const actual1 = isArmstrongNum(input1); 
    const actual2 = isArmstrongNum(input2); 
    const actual3 = isArmstrongNum(input3); 
    const actual4 = isArmstrongNum(input4); 
    const actual5 = isArmstrongNum(input5); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
    expect(actual4).toBe(expected); 
    expect(actual5).toBe(expected);  
});
});