var removeElement = function(nums, val) {

    var arrLength = nums.length;

    for(var i=0; i < arrLength; i ++ ){
        if(nums[i] === val){
            nums.splice(i, 1);
            i--;
            arrLength--;
        }
    }

    return nums.length;
};
