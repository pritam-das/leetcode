//Using SET

var findDisappearedNumbers = function(nums) {
    const numbers = new Set(nums);
    const sizeOfArr = nums.length;
    const arr=[];
    for(var i=1; i<=sizeOfArr; i++){
        if(numbers.has(i) !== true){
            arr.push(i);
            if(arr.length === (sizeOfArr - Set.size)) break;

        }

    }
    return arr;
};
