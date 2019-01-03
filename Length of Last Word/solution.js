var lengthOfLastWord = function(s) {
    //string is something other than white spaces or line gap
    if (/\S/.test(s))
    {
        var arr = s.split(" ");
        var lastIsBlank = true;
        while(lastIsBlank){
            if(arr[arr.length - 1] === ""){
                arr.pop();
            }
            else{
                lastIsBlank = false;
            }
        }

        return arr[arr.length - 1].length;
    }

    else{
        return 0;
    }

};
