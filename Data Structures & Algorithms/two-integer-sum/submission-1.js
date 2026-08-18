class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const iMap = {}

        nums.forEach((num,i) => {
            iMap[num] = i
        })
        
        for(let i = 0; i< nums.length;i++){
            const diff = target - nums[i]
            if(iMap[diff]!== undefined && iMap[diff]!==i) {
                return [iMap[diff], i]
            }
        }
    }
}
