class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for(const n of nums) {
            map.set(n, (map.get(n) || 0) + 1)
        }

        const sorted = [...map.entries()].sort((a,b) => b[1] - a[1])

        return sorted.slice(0,k).map(([val]) => val)
    }
}
