var isPalindrome = function(x) {

    var oldArray = [];
    var newArray = x.toString(10).split('').map(function(Number){
        oldArray.unshift(Number);
    });

    var newString = "";

    for(var i=0; i< (oldArray.length); i++){
        newString += oldArray[i];
    }

    var oldString = x.toString(10);

    if(newString === oldString){
        return true;
    }
    else{
        return false;
    };

    return newString;
};
