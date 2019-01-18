var isHappy = function(n) {
    var squaredSum=0;
    var count = 0;
    var arr=[];

    while(count<10){

        arr=[...n.toString().split('')];

        arr.forEach(function(number){
            squaredSum += Math.pow(number,2);
        });

        if(squaredSum===1){
            return true;
        }
        else{
            n=squaredSum;
            squaredSum = 0;
            count++;
        }
    }

    return false;
};
