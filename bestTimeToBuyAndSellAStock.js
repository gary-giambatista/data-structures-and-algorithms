var maxProfit = function(prices) {
     let buy = prices[0] // always have to buy the first day
     let profit = 0 // profit will always be 0 if not a good sell day
     for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) { //checking for a lower buy price
            buy = prices[i] // if a lower buy price exists, set it as buy
        } else {
            profit = Math.max(prices[i] - buy, profit) // otherwise check to see if the current price - buy is above the current profit, if it is, set it to profit, if not keep profit
        }
     }
     return profit
};
