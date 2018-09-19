var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  
  this.storage = {};
  this.count = 0;

};


Stack.prototype.push = function(value) {


	    this.storage[this.count] = value;
	    this.count += 1;

  	};


Stack.prototype.pop = function() {

	  var poppedValue = this.storage[this.count-1];

	  if (this.count > 0) {
	    this.count -= 1;
	  } 

	  return poppedValue;

  	};



Stack.prototype.size = function() {


		return this.count;
}