var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    
    
    storage[count] = value;
    count += 1;

  };

  someInstance.pop = function() {

  
  var poppedValue = storage[count-1];

  if (count > 0) {
    count -= 1;
  } 

  return poppedValue;

  };

  someInstance.size = function() {

    return count;
  };

  return someInstance;
};
