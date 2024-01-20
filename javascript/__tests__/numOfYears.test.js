const { numOfYears } = require('../numOfYears');

describe('numOfYears', () => {
    test('Should return 0 when targetPopulation is equal to start population', () => {
        //arrange
        const expected = 0;

        const input1A = 1000;
        const input1B = 1;
        const input1C = 0;
        const input1D = 1000;
        //act
        const actual = numOfYears(input1A, input1B, input1C, input1D);
        //assert
        expect(actual).toBe(expected);
    });
    
})