var findDuplicates = function(nums) {
    const hashTable = new Map();
    const duplicateArr = [];

    nums.forEach(number => {
        if(hashTable.get(number.toString()) !== undefined){
            duplicateArr.push(number);
        }
        else{
            hashTable.set(number.toString(), 1);
        }
    });

    return duplicateArr;
};
