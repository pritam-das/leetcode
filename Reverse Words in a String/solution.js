var reverseWords = function(str) {
    var resArr = [];
    var result = str.split(" ").filter(word => word!=="").map(word => resArr.unshift(word));
    return resArr.join(" ");
};
