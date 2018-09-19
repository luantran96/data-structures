var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  var storage = {};
  var count = 0;

  someInstance.storage = storage;
  someInstance.count = count;


  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {

		//debugger;
		  if (this.count === 0) {

		    this.storage[0] = value;

		  } else {

		      for(var i = 0; i < this.count ; i++){

		        this.storage[i+1] = this.storage[i];

		      }

		    	this.storage[0] = value;

		  	}
		      
		      this.count += 1;
		  };



queueMethods.dequeue = function() {

		  if(this.count > 0){

		    var dequeuedVal = this.storage[this.count - 1];

		    this.count -= 1;

		    return dequeuedVal; 

		  }


		};



queueMethods.size = function() {



		return this.count;
}


