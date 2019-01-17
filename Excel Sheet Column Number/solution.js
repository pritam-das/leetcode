var titleToNumber = function(s) {
    var sum = 0;
    var strToArr = s.match(/[A-Z]/g);
    var len = strToArr.length;
    var characterAt;

    for(var i=0; i<len; i++){
        characterAt = strToArr[i].charCodeAt(0) - 64;
        sum += characterAt*(Math.pow(26, (len - i -1)));
    }
    return sum;

};
