var isPalindrome = function(s) {
    if(/^\s*$/.test(s)) return true;

    if(!s) return false;

    if(!s.match(/[a-zA-Z0-9]/g)) return true;

    var reverse = s.match(/[a-zA-Z0-9]/g).reverse().join("").toLowerCase();
    var straight = s.match(/[a-zA-Z0-9]/g).join("").toLowerCase();

    return reverse === straight ? true : false;


};
