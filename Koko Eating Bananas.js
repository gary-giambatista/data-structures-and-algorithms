YouTube Video Solution: https://youtu.be/B_sAKDhBzZs

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, hoursGuardIsGone) {
    let minEatingRate = 0; // RATE: smallest rate between 0 and max of piles
    let maxEatingRate = Math.max(...piles); // RATE: max amount of bananas in piles (worst case MUST eat this many)
    let minimumBananasToEatPerHour = maxEatingRate; // RATE: worst case, eat the largest number of any index in piles

    while (minEatingRate <= maxEatingRate) { //RATES: left and right(MIN and MAX) of all possible rates to eat of bananas in the piles
        const middleEatingRate = Math.floor((minEatingRate + maxEatingRate) / 2);//RATE: eating rate how many bananas to eat per hour
        let calculatedMinHours = 0; //TIME: after dividing every pile's total bananas by the middleEatingRate, calculate how many hours it takes to eat all bananas

        for (let bananas of piles) { //QUANTITY: bananas = number of bananas in each pile
            calculatedMinHours += Math.ceil(bananas / middleEatingRate) // QUANTITY / RATE = TIME: how many hours it takes to eat the current stack of bananas at the middle value rate, add that number to TOTAL calculatedMinHours time
        }
        if (calculatedMinHours <= hoursGuardIsGone) { //TIMES: compare time it takes to eat all bananas aganist time guard is gone
            minimumBananasToEatPerHour = Math.min(middleEatingRate, minimumBananasToEatPerHour) // set minimumBananasToEatPerHour to the smaller value of hours and minimumBananasToEatPerHour (initial value = max val in piles)
            maxEatingRate = middleEatingRate - 1 // check for an even smaller middle value(rate) by moving right down and running again
        } else {
            minEatingRate = middleEatingRate + 1 // check for a larger middle value(rate) by moving left up and running again
        }
    }
    return minimumBananasToEatPerHour // return minimum rate
};

//                           QUANTITY      TIME
var minEatingSpeed = function(piles, hoursGuardIsGone) {
    let minEatingRate = 0; //RATE
    let maxEatingRate = Math.max(...piles); //RATE
    let minimumBananasToEatPerHour = maxEatingRate; //RATE

    //Start Binary Search with Left and Right rates
    while (minEatingRate <= maxEatingRate) { //RATES
        const middleEatingRate = Math.floor((minEatingRate + maxEatingRate) / 2); //RATE
        let calculatedMinHours = 0; //TIME

        //calculate total TIME given middle RATE
        for (let bananas of piles) { //QUANTITY
            calculatedMinHours += Math.ceil(bananas / middleEatingRate) // QUANTITY / RATE = TIME
        }

        //Adjust min or max value depending on TIME, and try to set new min RATE
        if (calculatedMinHours <= hoursGuardIsGone) { //TIMES
            minimumBananasToEatPerHour = Math.min(middleEatingRate, minimumBananasToEatPerHour) //RATE
            maxEatingRate = middleEatingRate - 1 //RATE
        } else {
            minEatingRate = middleEatingRate + 1 //RATE
        }
    }
    return minimumBananasToEatPerHour //RATE
};

//STEPS

//1.
minEatingRate = 0
maxEatingRate = 11
minimumBananasToEatPerHour = 11

middleEatingRate = 5
calculatedMinHours = 0
calculatedMinHours = 3/5 + 6/5 + 7/5 + 11/5 = 1+1+1+2 = 5

5 <= 8
minimumBananasToEatPerHour = Math.min(11, 5) = 5
maxEatingRate = 4

//2.
minEatingRate = 0
maxEatingRate = 4
minimumBananasToEatPerHour = 5

middleEatingRate = 2
calculatedMinHours = 0
calculatedMinHours = 3/2 + 6/2 + 7/2 + 11/2 = 2+3+4+6 = 15

15 !<= 8
minEatingRate = 3

//3.
minEatingRate = 3
maxEatingRate = 4
minimumBananasToEatPerHour = 5

middleEatingRate = 3
calculatedMinHours = 0
calculatedMinHours = 3/3 + 6/3 + 7/3 + 11/3 = 1+2+2+4 = 9

9 !<= 8
minEatingRate = 4

//4.
minEatingRate = 4
maxEatingRate = 4
minimumBananasToEatPerHour = 5

middleEatingRate = 4
calculatedMinHours = 0
calculatedMinHours = 3/4 + 6/4 + 7/4 + 11/4 = 1+2+2+3 = 8

8 <= 8
minimumBananasToEatPerHour = Math.Min(5, 4) = 4
maxEatingRate = 3

//5. 
minEatingRate = 4
maxEatingRate = 3
minimumBananasToEatPerHour = 4

minEatingRate !<= maxEatingRate = STOP
return minimumBananasToEatPerHour = 4
