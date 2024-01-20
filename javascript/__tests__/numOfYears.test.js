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
    test('Should return message if neither increasePercentage nor numComingOrGoing progress numOfYears towards targetPopulation', () => {
        //arrange
        const expected = 'Please enter valid inputs';

        const input1A = 1000;
        const input1B = 0;
        const input1C = 0;
        const input1D = 1001;

        const input2A = 1000;
        const input2B = -1;
        const input2C = 0;
        const input2D = 1001;

        const input3A = 1000;
        const input3B = 1;
        const input3C = 0;
        const input3D = 999;

        const input4A = 1000;
        const input4B = 0;
        const input4C = -1;
        const input4D = 1001;

        const input5A = 1000;
        const input5B = 0;
        const input5C = 1;
        const input5D = 999;
        //act
        const actual1 = numOfYears(input1A, input1B, input1C, input1D);
        const actual2 = numOfYears(input2A, input2B, input2C, input2D);
        const actual3 = numOfYears(input3A, input3B, input3C, input3D);
        const actual4 = numOfYears(input4A, input4B, input4C, input4D);
        const actual5 = numOfYears(input5A, input5B, input5C, input5D);
        //assert
        expect(actual1).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
        expect(actual4).toBe(expected);
        expect(actual5).toBe(expected);
    });
})