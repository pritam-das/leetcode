var plusOne = function(digits) {

    for(var i=(digits.length - 1); i>=0; i--){
        if(digits[i] < 9){
            digits[i]+=1;
            return digits;
        }
        else if(digits.length===1){
            digits[i]=0;
            digits.unshift(1);
            return digits;
        }
        else if(digits[i]===9){
            if(digits[i-1]<9){
                digits[i-1]+=1;
                digits[i] = 0;
                return digits;
            }
            else if(digits[i-1]===9){
                digits[i] = 0;
                for(var j=(i-1); j>=0; j--){
                    digits[j]=0;
                    if(digits[j-1]<9){
                        digits[j-1]++;
                        return digits;
                    }

                }
                digits.unshift(1);
                return digits;
            }
        }
    }

};
