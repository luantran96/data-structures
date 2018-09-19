var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  var storage = {};
  var count = 0;

  someInstance.storage = storage;
  someInstance.count = count;

  someInstance.enqueue = queueMethods['enqueue'];
  someInstance.dequeue = queueMethods['dequeue'];
  someInstance.size = queueMethods['size'];

  return someInstance;
};

var queueMethods = {
	'enqueue': function(value) {

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
		  },

	'dequeue': function() {

		  if(this.count > 0){

		    var dequeuedVal = this.storage[this.count - 1];

		    this.count -= 1;

		    return dequeuedVal; 

		  }


		},

	'size' : function() {


			return this.count;

		}

};


