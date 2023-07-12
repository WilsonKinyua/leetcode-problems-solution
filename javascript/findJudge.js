/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {

    if (n === 1) return 1;

    const trustMap = new Map();

    for (let i = 0; i < trust.length; i++) {
        const [truster, trustee] = trust[i];
        if (trustMap.has(trustee)) {
            trustMap.set(trustee, trustMap.get(trustee) + 1);
        } else {
            trustMap.set(trustee, 1);
        }
    }

    for (let [trustee, trustCount] of trustMap) {
        if (trustCount === n - 1) return trustee;
    }

    return -1;
};


console.log(findJudge(2, [[1,2]])); // 2
console.log(findJudge(3, [[1,3],[2,3]])); // 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // -1
console.log(findJudge(3, [[1,2],[2,3]])); // -1
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])); // 3
