//UTILIZING HASHTABLE

var twoSum = function(nums, target) {

    var hashTable = new Map();
    var sumMinusElement;

    for(var i=0; i<nums.length; i++){

        sumMinusElement = target - nums[i];

        if(hashTable.get(sumMinusElement.toString()) !== undefined){
            return [hashTable.get(sumMinusElement.toString()), i];
        }

        hashTable.set(nums[i].toString(), i);
    }
};
