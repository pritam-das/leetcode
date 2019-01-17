var majorityElement = function(nums) {
    var element;
    var count = 1;
    var len = nums.length;
    for(var i=0; i < len; i++){
        element = nums[i];
        for(var j=i+1; j<len; j++)
        {
            if(nums[j] === element) {count++;}
        }

        if(count >= parseFloat(len/2))
        {
            return element;
        }
        else{
            count = 1;
        }

    }
};
