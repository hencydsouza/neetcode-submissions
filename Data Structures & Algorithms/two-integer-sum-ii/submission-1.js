class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l=0, r=numbers.length-1

        while(l<r) {
            const res = numbers[l] + numbers[r]

            if(res === target) {
                return [l+1,r+1]
            }else if(res > target) {
                r--;
            } else {
                l++
            }
        }

        return []
    }
}
