var twoSum = function(numbers, target) {
    for(var i=0; i<numbers.length; i++){

        for(var j=(i+1); j<numbers.length; j++){
            if(numbers[i] + numbers[j] === target) return [i+1,j+1];
        }
    }
};


//ALTERNATE

var twoSum = function(numbers, target) {
  var l=numbers.length, i=0, j=l-1;
  while (numbers[i]+numbers[j] !== target) {
    numbers[i]+numbers[j] < target ? i++ : j--;
  }
  return [i+1, j+1];
};
