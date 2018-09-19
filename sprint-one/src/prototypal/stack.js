var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  var storage = {};
  var count = 0;
  someInstance.storage = storage;
  someInstance.count = count;


  return someInstance;
};

var stackMethods = {};


	stackMethods.push = function(value) {

     	var count = this.count;

	    this.storage[this.count] = value;
	    this.count += 1;

  	};

  	stackMethods.pop = function() {

	  var poppedValue = this.storage[this.count-1];

	  if (this.count > 0) {
	    this.count -= 1;
	  } 

	  return poppedValue;

  	};

  	stackMethods.size = function() {

  		return this.count;
  	}