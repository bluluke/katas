const { maskify } = require('../maskify');

describe('Makify', () => { 
  test('Should return empty string from input of empty string', () => { 
    //arrange 
    const expected = ''; 
    const input = ''; 
    //act 
    const actual = maskify(input); 
    //assert 
    expect(actual).toBe(expected); 
  }); 
  test('Should return string input unchanged if input length is less than 5.', () => { 
    //arrange 
    const expected1 = 'jf6'; 
    const expected2 = '4'; 
    const expected3 = 'jkvh'; 

    const input1 = 'jf6'; 
    const input2 = '4'; 
    const input3 = 'jkvh'; 
    //act 
    const actual1 = maskify(input1); 
    const actual2 = maskify(input2); 
    const actual3 = maskify(input3); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2); 
    expect(actual3).toBe(expected3); 
  });
  test('Should return string input with all characters replaced with # except for last 4', () => { 
    //arange
    const expected1 = "####fghd"; 
    const expected2 ="#0976"; 
    const expected3 = "#####jdhf"; 

    const input1 = "hduefghd"; 
    const input2 = "30976"; 
    const input3 = "wirozjdhf"; 
    //act 
    const actual1 = maskify(input1); 
    const actual2 = maskify(input2); 
    const actual3 = maskify(input3); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2); 
    expect(actual3).toBe(expected3); 
  });
});

