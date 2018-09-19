var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  someInstance.push = stackMethods['push'];
  someInstance.pop = stackMethods['pop'];
  someInstance.size = stackMethods['size'];
  someInstance.count = count;
  someInstance.storage = storage;

  return someInstance;

};


var stackMethods = {

	'push' : function(value) {

     	var count = this.count;

	    this.storage[this.count] = value;
	    this.count += 1;

  	},

  	'pop': function() {

	  var poppedValue = this.storage[this.count-1];

	  if (this.count > 0) {
	    this.count -= 1;
	  } 

	  return poppedValue;

  	},

  	'size': function() {


  		return this.count;
  	}
};


