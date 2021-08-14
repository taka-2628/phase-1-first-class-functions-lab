// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


//Declare a variable with const that is assigned an anonymous function. 
//The assigned function should accept an array of drivers as an argument and return the first two drivers in the array
const returnFirstTwoDrivers = function(parameter){
    return parameter.slice(0,2);
}

console.log(returnFirstTwoDrivers(drivers));

/* Can pass the test with this as well but this will not work with later functions 
function returnFirstTwoDrivers(parameter){
    const variable = parameter.slice(0,2);
    return variable;
}
*/


//Declare a variable with const that is assigned an anonymous function. 
//The assigned function should accept an array of drivers as an argument and return the last two drivers in the array
const returnLastTwoDrivers = function (parameter){
    return parameter.slice(2,4);
}

console.log(returnLastTwoDrivers(drivers));


//This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers);


/*
const selectingDrivers = (function(parameter1, parameter2){
    return[parameter1, parameter2];
})

console.log(selectingDrivers(returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)))
*/

/*
const createFareMultiplier = (integer) => {
    return function (fare){
        return fare * integer
    }
}
*/


function createFareMultiplier(integer){
    return function (fare){
        return fare * integer
    } 
}

console.log(createFareMultiplier(4)(2));


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers)
}