/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const stack = [];
  const result = [];
  let current = root;

  while (current || stack.length) {
    // stack.length is the same as stack.length > 0 or stack.length !== 0
    while (current) {
      // while current is not null
      stack.push(current); // push the current node to the stack
      current = current.left; // move to the left node
    }

    current = stack.pop(); // pop the last node from the stack
    result.push(current.val); // push the value of the node to the result
    current = current.right; // move to the right node
  }

  return result; // return the result
};

console.log(inorderTraversal([1, null, 2, 3])); // [1,3,2]
console.log(inorderTraversal([])); // []
console.log(inorderTraversal([1])); // [1]
console.log(inorderTraversal([1, 2])); // [2,1]
console.log(inorderTraversal([1, null, 2])); // [1,2]
