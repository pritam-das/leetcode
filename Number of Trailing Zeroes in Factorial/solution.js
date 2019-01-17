var trailingZeroes = function(n) {
    var multiple = 5;
    var count=0;
    while(multiple <= n){
        count+= Math.floor(n/multiple);
        multiple*=5;
    }
    return count;

};

//copied
// Find the number of trailing zeros in 500!.
//
// The number of multiples of 5 that are less than or equal to 500 is 500/5=100
// Then, the number of multiples of 25 is 500/25=20
// Then, the number of multiples of 125 is 500/125=4
// The next power of 5 is 625, which is greater than 500
// Therefore, the number of trailing zeros of is = 100+20+4=124
// refer this link https://brilliant.org/wiki/trailing-number-of-zeros/ for more
