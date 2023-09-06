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
});