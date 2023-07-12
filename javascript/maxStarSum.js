/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function(vals, edges, k) {
    const n = vals.length;
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        graph[a - 1][b - 1] = 1;
        graph[b - 1][a - 1] = 1;
    }
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(k + 1).fill(0);
    }
    for (let i = 0; i < n; i++) {
        dp[i][0] = 0;
        dp[i][1] = vals[i];
    }
    for (let j = 2; j <= k; j++) {
        for (let i = 0; i < n; i++) {
            for (let m = 0; m < n; m++) {
                if (graph[i][m] === 1) {
                    dp[i][j] = Math.max(dp[i][j], dp[m][j - 1]);
                }
            }
            dp[i][j] += vals[i];
        }
    }
    let max = 0;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, dp[i][k]);
    }
    return max;
};

console.log(maxStarSum([1,2,3,4,5], [[1,2],[2,3],[3,4],[4,5]], 2)); // 11
console.log(maxStarSum([1,2,3,4,5], [[1,2],[2,3],[3,4],[4,5]], 3)); // 12
console.log(maxStarSum([1,2,3,4,5], [[1,2],[2,3],[3,4],[4,5]], 4)); // 13
console.log(maxStarSum([1,2,3,4,5], [[1,2],[2,3],[3,4],[4,5]], 5)); // 14
console.log(maxStarSum([1,2,3,4,5], [[1,2],[2,3],[3,4],[4,5]], 6)); // 15
console.log(maxStarSum([1,2,3,4,5], [[1,2],[2,3],[3,4],[4,5]], 7)); // 16
console.log(maxStarSum([1,2,3,4,5], [[1,2],[2,3],[3,4],[4,5]], 8)); // 17