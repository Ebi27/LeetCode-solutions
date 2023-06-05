/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity, maxProfit = 0

    for(let i = 0; i < prices.length; i++){
        let currentPrice = prices[i]
        
        if(currentPrice < minPrice){
            minPrice = currentPrice
        }

        let profit = currentPrice - minPrice
        if(profit > maxProfit){
            maxProfit = profit
        }
    }
    return maxProfit
};