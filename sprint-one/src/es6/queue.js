class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

  this.storage = {};
  this.count = 0;

  }

  enqueue(value){

		  if (this.count === 0) {

		    this.storage[0] = value;

		  } else {	

		      for(var i = 0; i < this.count ; i++){

		        this.storage[i+1] = this.storage[i];

		      }

		    	this.storage[0] = value;

		  	}
		      
		      this.count += 1;

  }

  dequeue(){

		  if(this.count > 0){

		    var dequeuedVal = this.storage[this.count - 1];

		    this.count -= 1;

		    return dequeuedVal; 

		  }


  }

  size(){

  		return this.count;

  }


}
