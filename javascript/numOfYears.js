const numOfYears = (startPopulation, increasePercentage, numComingOrGoing, targetPopulationNum) => {
    let numOfYearsItTakes = 0;
    if(startPopulation < targetPopulationNum && increasePercentage <= 0 && numComingOrGoing <= 0 || startPopulation > targetPopulationNum && increasePercentage >= 0 && numComingOrGoing >= 0)  {
        return 'Please enter valid inputs';
    }

    if(startPopulation >= targetPopulationNum) {
        return numOfYearsItTakes;
    }
}





module.exports = { numOfYears }; 