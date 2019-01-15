var merge = function(nums1, m, nums2, n) {
    var done = false;
    var temp;
    while(n>0){
        temp = nums2[n-1];
        for(var i=0; i<nums1.length; i++){
            if(nums1[i] > temp){
                nums1.pop();
                nums1.splice(i, 0, temp);
                n--;
                done = true;
                break;
            }
        }
        if(done===false)
        {
              nums1.pop();
              nums1.splice(m, 0, temp);
              n--;
        }
        else{
            done = false;
        }


    }
    return nums1;

};
