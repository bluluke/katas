const { calculatePossibleNumCakes } = require('../calculatePossibleNumCakes');

describe('calculatePossibleNumCakes', () => { 
  test('Should return 1 from input of 2 matching single property objects', () => { 
    //arrange 
    const expected = 1; 
    const input1a = {flour: 5}; 
    const input1b = {flour: 5};

    const input2a = {sugar: 3}; 
    const input2b = {sugar: 3};

    const input3a = {salt: 50}; 
    const input3b = {salt: 50};
    //act 
    const actual1 = calculatePossibleNumCakes(input1a, input1b); 
    const actual2 = calculatePossibleNumCakes(input2a, input2b); 
    const actual3 = calculatePossibleNumCakes(input3a, input3b); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
  }); 
  test('Should return integer representing maximum cakes from input of 2 matching objects', () => { 
    //arrange 
    const expected = 1; 

    const input1a = {flour: 3, eggs: 2}; 
    const input1b = {flour: 3, eggs: 2};

    const input2a = {pepper: 6, cinnamon: 10, sugar: 3}; 
    const input2b = {pepper: 6, cinnamon: 10, sugar: 3};

    const input3a = {cinnamon: 10, sugar: 19, apples: 39, salt: 50}; 
    const input3b = {cinnamon: 10, sugar: 19, apples: 39, salt: 50};
    //act 
    const actual1 = calculatePossibleNumCakes(input1a, input1b); 
    const actual2 = calculatePossibleNumCakes(input2a, input2b); 
    const actual3 = calculatePossibleNumCakes(input3a, input3b); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
  }); 
});