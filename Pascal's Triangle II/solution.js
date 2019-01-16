var getRow = function(rowIndex) {
    var result = [];
    result[0] = 1;
    result[rowIndex] = 1;

    for(var i=1; i < rowIndex; i++){

        for(var j=1; j<=i; j++){
            j===1 ? result[i] = (rowIndex + 1 - j)/j : result[i]*=(rowIndex + 1 -j)/j;
        }
    }

    return result;
};
