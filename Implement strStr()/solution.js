var strStr = function(haystack, needle) {
    if(needle === ""){
        return 0;
    }

    var tempArr = [];
    var needleLength = needle.length;

    for(var i=0; i < haystack.length; i++){
        if(haystack.charAt(i) === needle.charAt(0)){

            if(haystack.charAt(i + needleLength -1) === needle.charAt(needleLength -1)){
           for(var j=0; j < needleLength; j++){
                var k = i+j;
                tempArr.push(haystack.charAt(k));
            }

            if(tempArr.join("") === needle){
                    return i;
            }

            else{
                    tempArr.length = 0;
            }

            }

        }
    }

    return -1;



};
