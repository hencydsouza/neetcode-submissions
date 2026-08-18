class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for(const s of strs) {
            const sorted = s.split('').sort().join('')

            if(!map[sorted]) {
                map[sorted] = []
            }
            
            map[sorted].push(s)
        }

        return Object.values(map)
    }
}
