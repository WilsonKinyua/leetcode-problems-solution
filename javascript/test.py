class Solution:
    def maxStarSum(self, vals: List[int], edges: List[List[int]], k: int) -> int:
        # Step 1: Create adjacency matrix
        n = len(vals)
        adj = [[0] * n for _ in range(n)]
        for u, v in edges:
            adj[u - 1][v - 1] = 1
            adj[v - 1][u - 1] = 1

        # Step 2: Calculate sum of weights for each vertex
        vertex_weight_sums = [0] * n
        for u, v in edges:
            vertex_weight_sums[u - 1] += vals[v - 1]
            vertex_weight_sums[v - 1] += vals[u - 1]

        # Step 3: Calculate sum of weights for each star
        max_star_sum = float("-inf")
        for i in range(n):
            if adj[i].count(1) < k - 1:
                # Vertex i is not the center of a star
                continue

            # Calculate sum of weights for star with center at vertex i
            star_sum = vertex_weight_sums[i]
            for j in range(n):
                if j != i and adj[i][j]:
                    star_sum += vals[j]
            max_star_sum = max(max_star_sum, star_sum)

        # Step 4: Return the maximum star sum
        return max_star_sum
