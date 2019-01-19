var numJewelsInStones = function(J, S) {
    const jewels = new Set(J);
    var count = 0;
    const sArr = S.split('').forEach(stone => {
        if(jewels.has(stone)) count++;
    })

    return count;
};
