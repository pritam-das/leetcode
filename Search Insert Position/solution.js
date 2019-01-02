var searchInsert = function(nums, target) {

    if(target > nums[nums.length - 1]){
        return nums.length;
    }

    for(var i=0; i < nums.length; i++){

        if(nums[i] === target){
            return i;
        }

        else if(target > nums[i]){
            if(nums[i+1] === null){
                return i+1;
            }
            else if(nums[i+1] === target){
               return i+1;
            }
            else if(target < nums[i+1]){
                return i+1;
            }
        }

        else if(target < nums[i] && (i===0)){
            return i;
        }


    }
};
