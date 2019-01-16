// Information: The first number of the n-th row of Pascal's triangle is 1, the second number is 1 × (n-1), the third number is 1 × (n-1) × (n-2) / 2, paragraph number four 1 × (n-1) × (n-2) / 2 × (n-3) / 3 ... and so on.

var generate = function(numRows) {
    var result = [];
    var row = 1;

    for(var s=0; s<numRows; s++){
        result[s] = [];
    } //required to initialize the array with the number of dimensions possible

    while(row <= numRows){
        var rowCount = row - 1; //the calculation takes into account all rows, including row 1. But for storing it in array the array needs to start at 0, whereas my calculation of row starts at 1.
        result[rowCount][0] = 1; //always going to be 1
        for(var i=1; i<row; i++){
                for(var j=1; j<=i; j++)
                {
                    j === 1 ? result[rowCount][i] = (row - 1) : result[rowCount][i] *= (row - j)/j;
                }

        }

        row++;
    }

    return result;

};
