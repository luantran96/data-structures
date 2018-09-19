var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 0;
  var FrontIdx = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {

  if(count === 0){

    storage[0] = value;

  }else{

      for(var i = 0; i < count ; i++){

        storage[i+1] = storage[i];

      }

    storage[0] = value;

  }
      

      count += 1;
  };

  someInstance.dequeue = function() {

  if(count > 0){

    var dequeuedVal = storage[count - 1];

    count -= 1;

    return dequeuedVal; 

  }


  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
