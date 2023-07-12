/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [a, b] = edges[0]; // destructuring assignment
    const [c, d] = edges[1]; // destructuring assignment
    return a === c || a === d ? a : b; // ternary operator
};

console.log(findCenter([[1,2],[2,3],[4,2]])); // 2
console.log(findCenter([[1,2],[5,1],[1,3],[1,4]])); // 1
