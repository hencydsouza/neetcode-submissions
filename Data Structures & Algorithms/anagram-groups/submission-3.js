class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for(const s of strs) {

            const count = new Array(26).fill(0)

            for(let i = 0; i< s.length;i++) {
                count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }

            const key = count.join(',')

            if(!map[key]) {
                map[key] = []
            }

            map[key].push(s)
        }

        return Object.values(map)
    }
}
