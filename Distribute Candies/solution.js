var distributeCandies = function(candies) {
    const candySet = new Set(candies);
    const distribution = candies.length/2;
    const candySetSize = candySet.size;

    return distribution <= candySetSize ? distribution : candySetSize;
};
