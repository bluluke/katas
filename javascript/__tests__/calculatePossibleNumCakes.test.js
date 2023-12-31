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
  test('Should return integer representing maximum cakes from input of 2 objects with matching properties and differing values', () => { 
        //arrange 
    const expected1 = 2; 
    const expected2 = 3; 
    const expected3 = 4; 

    const input1a = {flour: 3, eggs: 2}; 
    const input1b = {flour: 9, eggs: 4};

    const input2a = {pepper: 6, cinnamon: 10, sugar: 3}; 
    const input2b = {pepper: 24, cinnamon: 30, sugar: 12};

    const input3a = {cinnamon: 10, sugar: 19, apples: 39, salt: 50}; 
    const input3b = {cinnamon: 60, sugar: 76, apples: 156, salt: 500};
    //act 
    const actual1 = calculatePossibleNumCakes(input1a, input1b); 
    const actual2 = calculatePossibleNumCakes(input2a, input2b); 
    const actual3 = calculatePossibleNumCakes(input3a, input3b); 
    //assert 
    expect(actual1).toBe(expected1); 
    expect(actual2).toBe(expected2); 
    expect(actual3).toBe(expected3); 
  });
  test('Should return integer  when the recipe integer value determining the max number does not have the corresponding available value as a multiple', () => { 
            //arrange 
        const expected1 = 2; 
        const expected2 = 3; 
        const expected3 = 4; 

        const input1a = {flour: 3, eggs: 2}; 
        const input1b = {flour: 9, eggs: 5};

        const input2a = {pepper: 6, cinnamon: 10, sugar: 3}; 
        const input2b = {pepper: 24, cinnamon: 32, sugar: 12};

        const input3a = {cinnamon: 10, sugar: 19, apples: 39, salt: 50}; 
        const input3b = {cinnamon: 60, sugar: 95, apples: 160, salt: 500};
        //act 
        const actual1 = calculatePossibleNumCakes(input1a, input1b); 
        const actual2 = calculatePossibleNumCakes(input2a, input2b); 
        const actual3 = calculatePossibleNumCakes(input3a, input3b); 
        //assert 
        expect(actual1).toBe(expected1); 
        expect(actual2).toBe(expected2); 
        expect(actual3).toBe(expected3); 
    });
    test('Should return 0 when the recipe object has a property not present in available object.', () => { 
            //arrange 
        const expected = 0;

        const input1a = {apples: 20000, flour: 3, eggs: 2}; 
        const input1b = {flour: 9, eggs: 5};

        const input2a = {apples: 180, pepper: 6, cinnamon: 10, sugar: 3}; 
        const input2b = {pepper: 24, cinnamon: 32, sugar: 12};

        const input3a = {lard: 50000, cinnamon: 10, sugar: 19, apples: 39, salt: 50}; 
        const input3b = {cinnamon: 60, sugar: 95, apples: 160, salt: 500};
        //act 
        const actual1 = calculatePossibleNumCakes(input1a, input1b); 
        const actual2 = calculatePossibleNumCakes(input2a, input2b); 
        const actual3 = calculatePossibleNumCakes(input3a, input3b); 
        //assert 
        expect(actual1).toBe(expected); 
        expect(actual2).toBe(expected); 
        expect(actual3).toBe(expected); 
    });
        test('Should return 0 when the available object is empty', () => { 
            //arrange 
        const expected = 0;

        const input1a = {apples: 20000, flour: 3, eggs: 2}; 
        const input2a = {apples: 180, pepper: 6, cinnamon: 10, sugar: 3}; 
        const input3a = {lard: 50000, cinnamon: 10, sugar: 19, apples: 39, salt: 50}; 

        const inputb = {};

        //act 
        const actual1 = calculatePossibleNumCakes(input1a, inputb); 
        const actual2 = calculatePossibleNumCakes(input2a, inputb); 
        const actual3 = calculatePossibleNumCakes(input3a, inputb); 
        //assert 
        expect(actual1).toBe(expected); 
        expect(actual2).toBe(expected); 
        expect(actual3).toBe(expected); 
    });
    test('Should return 0 when the recipe object is empty', () => { 
        //arrange 
    const expected = 0;

    const inputa = {};

    const input1b = {apples: 20000, flour: 3, eggs: 2}; 
    const input2b = {apples: 180, pepper: 6, cinnamon: 10, sugar: 3}; 
    const input3b = {lard: 50000, cinnamon: 10, sugar: 19, apples: 39, salt: 50}; 


    //act 
    const actual1 = calculatePossibleNumCakes(inputa, input1b); 
    const actual2 = calculatePossibleNumCakes(inputa, input2b); 
    const actual3 = calculatePossibleNumCakes(inputa, input3b); 
    //assert 
    expect(actual1).toBe(expected); 
    expect(actual2).toBe(expected); 
    expect(actual3).toBe(expected); 
});
});