var MinStack = function () {
  this.items = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.items.push(val);
  if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
    this.min.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.items.pop();
  if (popped === this.min[this.min.length - 1]) {
    this.min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]; // return the last element of the min array
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// test inputs
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2
