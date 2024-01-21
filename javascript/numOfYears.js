const numOfYears = (startPopulationNum, percentageOfChange, numComingOrGoing, targetPopulationNum) => {
    let numOfYearsItTakes = 0;
    if(startPopulationNum < targetPopulationNum && percentageOfChange <= 0 && numComingOrGoing <= 0 || startPopulationNum > targetPopulationNum && percentageOfChange >= 0 && numComingOrGoing >= 0)  {
        return 'Please enter valid inputs';
    } 

    if(startPopulationNum >= targetPopulationNum) {
        return numOfYearsItTakes;
    }
}





module.exports = { numOfYears }; 