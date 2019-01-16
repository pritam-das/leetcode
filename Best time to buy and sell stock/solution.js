var maxProfit = function(prices) {
    var maxProfit = null;

    if(prices.length < 2){
        return 0;
    }

    for(var i=0; i<prices.length; i++){

        for(var j=i+1; j<prices.length; j++){
            if(!maxProfit && (prices[j] > prices[i])){
                maxProfit = prices[j] - prices[i];
            }
            else if(maxProfit < (prices[j] - prices[i])){
                maxProfit = prices[j] - prices[i];
            }
        }
    }

    return maxProfit ? maxProfit : 0;
};
